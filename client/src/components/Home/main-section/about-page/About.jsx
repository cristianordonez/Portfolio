import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './About.scss';
import Resume from '../../../../../../public/Resume_2022.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const About = () => {
   return (
      <div className='about-container' data-testid='about-container'>
         <Typography className='about-item' variant='subtitle1'>
            Hi, my name is
         </Typography>
         <Typography className='about-item' variant='h3'>
            Cristian Ordoñez.
         </Typography>
         <Typography className='about-item' variant='body2'>
            I’m a Registered Dietitian turned Software Developer.
         </Typography>
         <Typography className='about-item' variant='body2'>
            During my previous experience as an RD, I specialized in working
            with populations that struggled with lower access to and use of
            care.
         </Typography>
         <Typography className='about-item' variant='body2'>
            Therefore I sought to use technology to help people manage their
            symptoms and improve their overall quality of life. This allowed me
            to see the importance of maintaining a smooth, easy to navigate user
            experience that is accessible to all people.
         </Typography>
         <Button
            size='small'
            variant='contained'
            component='a'
            download='resume'
            href={Resume}
         >
            <PictureAsPdfIcon color='secondary' />
            View Resume
         </Button>
      </div>
   );
};

export default About;
