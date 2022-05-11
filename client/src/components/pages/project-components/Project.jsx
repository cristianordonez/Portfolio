import React from 'react';
import Link from '@mui/material/Link';

const Project = ({ name, description, githubUrl }) => {
   const getTitleNames = (name) => {
      let lowercaseTitles = name.replaceAll('-', ' ').slice(0, -4).split(' ');
      return lowercaseTitles
         .map((name) => {
            let letter = name[0].toUpperCase();
            return letter + name.slice(1);
         })
         .join(' ');
   };

   let repoTitle = getTitleNames(name);

   return (
      <div>
         <h1>{repoTitle}</h1>
         <img src={require(`../../img/browser-windows/${name}.svg`)}></img>
         <p>{description}</p>
         <Link href={githubUrl}>Link to github</Link>
      </div>
   );
};

export default Project;
