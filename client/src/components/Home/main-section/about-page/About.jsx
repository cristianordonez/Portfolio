import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './About.scss';
import Resume from '../../../../../../public/Resume_2022.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PortfolioImage from './pngcoverpic.png';

const About = () => {
   return (
      <div className='about-container' data-testid='about-container'>
         <div className='about-container-text'>
            <Typography className='about-item' variant='subtitle1'>
               Hi, my name is
            </Typography>
            <Typography className='about-item' variant='h3'>
               Cristian Ordoñez.
            </Typography>
            <Typography className='about-item' variant='body1'>
               I’m a Registered Dietitian turned Software Developer.
            </Typography>
            <Typography className='about-item' variant='body1'>
               During my previous experience as an RD, I specialized in working
               with populations that struggled with lower access to and use of
               care.
            </Typography>
            <Typography className='about-item' variant='body1'>
               Therefore I sought to use technology to help people manage their
               symptoms and improve their overall quality of life. This allowed
               me to see the importance of maintaining a smooth, easy to
               navigate user experience that is accessible to all people.
            </Typography>
            <Typography variant='body1'>
               Here are just a few of the technologies I use:
            </Typography>
            <ul className='about-list'>
               <li>Javascript</li>
               <li>Typescript</li>
               <li>Node.js</li>
               <li>MySQL</li>
               <li>MongoDB</li>
               <li>Sass</li>
               <li>React</li>
               <li>Jest</li>
               <li>Cypress</li>
            </ul>
            <Button
               size='small'
               variant='contained'
               component='a'
               download='resume'
               color='secondary'
               href={Resume}
            >
               <PictureAsPdfIcon color='primary' />
               View Resume
            </Button>
         </div>
         <div className='about-container-image'>
            <img src={PortfolioImage} loading='lazy'></img>
         </div>
      </div>
   );
};

export default About;
