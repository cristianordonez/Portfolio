import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import Typography from '@mui/material/Typography';
import React, { useRef } from 'react';
import { getTitleNames } from '../../../../utils/utils';
import CustomIcon from '../custom-icon/CustomIcon.jsx';
import './ProjectListItem.scss';

export default function ProjectListItem({
   name,
   image,
   description,
   homepageUrl,
   githubUrl,
   setImageWidth,
}) {
   const repoTitle = getTitleNames(name);

   // used to update scroll amount based on current image width
   const updateImageWidth = (e) => {
      if (e.target) {
         setImageWidth(e.target.width);
      }
   };

   const windowSize = useRef([window.innerWidth, window.innerHeight]);

   return (
      <div className='project-list-item' data-testid='project-list-item'>
         <img
            onLoad={updateImageWidth}
            src={image}
            alt={name}
            loading='lazy'
         ></img>

         <div className='item-description'>
            <Typography align='center' variant='h3' sx={{ color: '#5dfdcb' }}>
               {repoTitle}
            </Typography>
            <div>
               {homepageUrl && (
                  <CustomIcon
                     Icon={OpenInBrowserIcon}
                     title='View live link'
                     label='link to deployment'
                     href={homepageUrl}
                  />
               )}
               <CustomIcon
                  Icon={GitHubIcon}
                  title='Visit Github repo'
                  label='link to repo'
                  href={githubUrl}
               />
            </div>
         </div>

         <Typography sx={{ paddingBottom: '2rem' }} variant='body2'>
            {description}
         </Typography>
      </div>
   );
}
