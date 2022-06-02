import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectList.scss';
import ProjectListItem from '../project-list-item/ProjectListItem.jsx';
import Typography from '@mui/material/Typography';

const ProjectList = ({ isVisible }) => {
   const [repos, setRepos] = useState([]);
   useEffect(() => {
      axios
         .get('/api/repos')
         .then((repos) => {
            setRepos(repos.data);
         })
         .catch((err) => {
            console.log('err.response:', err.response);
         });
   }, []);

   let currentClass = isVisible
      ? 'animate-projects project-list'
      : 'project-list';
   return (
      <div
         id='project-list'
         className={currentClass}
         data-testid='project-list'
      >
         <Typography className='project-list-title' variant='h2'>
            Projects
         </Typography>
         {repos.map((repo) => (
            <ProjectListItem
               key={repo._id}
               name={repo.name}
               image={repo.openGraphImageUrl}
               description={repo.description}
               homepageUrl={repo.homepageUrl}
               githubUrl={repo.url}
            />
         ))}
      </div>
   );
};

export default ProjectList;
