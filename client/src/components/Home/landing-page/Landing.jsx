import React from 'react';
import './Landing.scss';
import { Button } from '@mui/material';

const Landing = () => {
   return (
      <div className='landing'>
         <div className='background-shapes'></div>
         <div className='heading-container'>
            <h1>Hi, I'm Cristian Ordoñez.</h1>
         </div>
         <p>I am a full-stack web developer.</p>
         <Button color='secondary' variant='contained'>
            View My Work
         </Button>
      </div>
   );
};

export default Landing;
