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
      let lowercaseTitles = name.replaceAll('-', ' ').split(' ');
      return lowercaseTitles
         .map((name) => {
            let letter = name[0].toUpperCase();
            return letter + name.slice(1);
         })
         .join(' ');
   };
   let repoTitle = getTitleNames(name);

   return (
      <div
         className='project-list-item-container'
         data-testid='project-list-item'
      >
         <div className='project-list-item-description'>
            <Typography align='left' variant='h3'>
               {repoTitle}
            </Typography>

            <Typography className='project-text' align='left' variant='body2'>
               {description}
            </Typography>
         </div>
         <div className='project-list-item-img'>
            <img src={image} alt={name} loading='lazy'></img>
         </div>
         <div className='project-list-icons'>
            {homepageUrl && (
               <Tooltip title='View live link'>
                  <IconButton
                     aria-label='link to deployment'
                     target='_blank'
                     href={homepageUrl}
                     className='icon-button'
                     size='large'
                  >
                     <OpenInBrowserIcon fontSize='inherit' color='secondary' />
                  </IconButton>
               </Tooltip>
            )}
            <Tooltip title='Visit Github repo'>
               <IconButton
                  aria-label='link to repo'
                  className='icon-button'
                  target='_blank'
                  href={githubUrl}
                  size='large'
               >
                  <GitHubIcon fontSize='inherit' color='secondary' />
               </IconButton>
            </Tooltip>
         </div>
      </div>
   );
};

export default ProjectListItem;
