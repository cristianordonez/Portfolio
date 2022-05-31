import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectList.scss';
import ProjectListItem from '../project-list-item/ProjectListItem.jsx';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const ProjectList = () => {
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
   return (
      <motion.div
         className='project-list'
         data-testid='project-list'
         initial={{ y: '150vh' }}
         animate={{ y: 0 }}
         transition={{ duration: 1.5, type: 'spring' }}
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
      </motion.div>
   );
};

export default ProjectList;
