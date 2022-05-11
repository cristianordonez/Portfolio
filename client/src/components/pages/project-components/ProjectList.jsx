import React from 'react';
import Project from './Project.jsx';

const ProjectList = ({ repos }) => {
   return (
      <div>
         <h1>project page</h1>
         {/* {repos.map((repo) => (
            <Project
               key={repo._id}
               name={repo.name}
               description={repo.description}
               githubUrl={repo.url}
            />
         ))} */}
      </div>
   );
};

export default ProjectList;
