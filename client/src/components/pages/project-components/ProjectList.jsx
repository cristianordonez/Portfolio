import React from 'react';
import Project from './Project.jsx';
import Typography from '@mui/material/Typography';

const ProjectList = ({ repos }) => {
   console.log('repos:', JSON.stringify(repos[0], null, 4));
   return (
      <div>
         <Typography variant='h1'>Projects</Typography>
         {repos.map((repo) => (
            <Project
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
