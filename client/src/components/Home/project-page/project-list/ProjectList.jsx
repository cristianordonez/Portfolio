import React from 'react';
import './ProjectList.scss';
import ProjectListItem from '../project-list-item/ProjectListItem.jsx';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const ProjectList = ({ repos }) => {
   return (
      <div className='project-list'>
         <Typography variant='h1'>Projects</Typography>
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
