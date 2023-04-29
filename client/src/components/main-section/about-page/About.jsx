import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import Resume from '../../../../../public/cristian_ordonez_resume.pdf';
import './About.scss';
import PortfolioImage from './pngcoverpic.png';

export default function About() {
   return (
      <div className='about-container' data-testid='about-container'>
         <div className='about-container-text'>
            <Typography
               className='about-item'
               variant='subtitle1'
               sx={{ color: '#F3C969' }}
            >
               Hi, my name is
            </Typography>
            <Typography
               className='about-item'
               variant='h3'
               sx={{ color: '#5dfdcb' }}
            >
               Cristian Ordoñez.
            </Typography>
            <Typography className='about-item' variant='body1'>
               I’m a Software Engineer and Registered Dietitian.
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
               <li>&nbsp;Javascript</li>
               <li>&nbsp;Typescript</li>
               <li>&nbsp;Python</li>
               <li>&nbsp;Node.js</li>
               <li>&nbsp;MySQL</li>
               <li>&nbsp;PostgreSQL</li>
               <li>&nbsp;MongoDB</li>
               <li>&nbsp;Elasticsearch</li>
               <li>&nbsp;Sass</li>
               <li>&nbsp;React</li>
               <li>&nbsp;React Native</li>
               <li>&nbsp;FastAPI</li>
               <li>&nbsp;Jest</li>
               <li>&nbsp;Cypress</li>
            </ul>
            <Button
               size='small'
               variant='contained'
               component='a'
               color='secondary'
               download='resume'
               sx={{
                  fontWeight: 'bold',
               }}
               href={Resume}
            >
               <PictureAsPdfIcon color='primary' />
               View Resume
            </Button>
         </div>
         <div className='about-container-image'>
            <img
               alt='portfolio image'
               src={PortfolioImage}
               loading='lazy'
            ></img>
         </div>
      </div>
   );
}
