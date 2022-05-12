import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GitHubIcon from '@mui/icons-material/GitHub';

const Project = ({ name, image, description, homepageUrl, githubUrl }) => {
   console.log('image:', image);
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

   const imageStyle = {
      height: 'auto',
      width: '100%',
   };
   const outerContainerStyle = {
      display: 'flex-column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#3D919F',
      margin: '15px 0',
   };
   const descriptionContainerStyle = {
      display: 'flex-column',
      justifyContent: 'space-between',
   };
   return (
      <div style={outerContainerStyle}>
         <Typography align='center' variant='h3'>
            {repoTitle}
         </Typography>
         <img style={imageStyle} src={image}></img>
         <div style={descriptionContainerStyle}>
            <Typography align='left' variant='body1'>
               {description}
            </Typography>
            <IconButton target='_blank' href={homepageUrl}>
               <OpenInBrowserIcon />
            </IconButton>
            <IconButton target='_blank' href={githubUrl}>
               <GitHubIcon />
            </IconButton>
         </div>
      </div>
   );
};

export default Project;
