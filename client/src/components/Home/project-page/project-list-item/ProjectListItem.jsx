import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GitHubIcon from '@mui/icons-material/GitHub';
import './ProjectListItem.scss';

const ProjectListItem = ({
   name,
   image,
   description,
   homepageUrl,
   githubUrl,
}) => {
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
      <div className='project-list-item-container'>
         <Typography align='center' variant='h3'>
            {repoTitle}
         </Typography>
         <img src={image} alt={name} loading='lazy'></img>
         <div className='project-list-item-description'>
            <Typography align='left' variant='body1'>
               {description}
            </Typography>
            <Tooltip title='View live link'>
               <IconButton target='_blank' href={homepageUrl}>
                  <OpenInBrowserIcon color='secondary' />
               </IconButton>
            </Tooltip>
            <Tooltip title='Visit Github repo'>
               <IconButton target='_blank' href={githubUrl}>
                  <GitHubIcon color='secondary' />
               </IconButton>
            </Tooltip>
         </div>
      </div>
   );
};

export default ProjectListItem;
