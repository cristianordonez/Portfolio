import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import Scroll from 'react-scroll';
import './Landing.scss';

const scroller = Scroll.scroller;

const Landing = () => {
   const handleClick = () => {
      scroller.scrollTo('about');
   };

   return (
      <div className='landing' id='home'>
         <div className='background-shapes'></div>
         <div className='heading-container'>
            <Typography variant='h1'>Hi, I'm Cristian Ordoñez.</Typography>
         </div>
         <Typography
            className='landing-text'
            variant='body2'
            textAlign='center'
         >
            I am a Full Stack Developer and Registered Dietitian.
         </Typography>
         <Button
            onClick={() => handleClick()}
            color='secondary'
            variant='contained'
            aria-label='go to main page content'
            className='landing-page-link'
            sx={{
               fontWeight: 'bold',
               color: 'black',
            }}
         >
            View My Work
         </Button>
      </div>
   );
};

export default Landing;
