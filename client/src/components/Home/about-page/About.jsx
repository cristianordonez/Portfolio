import React from 'react';
import Typography from '@mui/material/Typography';
import './About.scss';
import { motion } from 'framer-motion';

const About = () => {
   return (
      <motion.div
         className='about-container'
         data-testid='about-container'
         initial={{ y: '150vh' }}
         animate={{ y: 0 }}
         transition={{ duration: 0.8, type: 'spring' }}
      >
         <Typography className='about-item' variant='subtitle1'>
            Hi, my name is
         </Typography>
         <Typography className='about-item' variant='h3'>
            Cristian Ordoñez.
         </Typography>
         <Typography className='about-item' variant='body2'>
            I'm a Registered Dietitian transitioning into a world of tech.
         </Typography>
         <Typography className='about-item' variant='body2'>
            During my experience in healthcare I specialized in working with
            individuals in a low socioeconomic status, a population that
            struggles with healthcare disparities such as lower access to and
            use of care.
         </Typography>
         <Typography className='about-item' variant='body2'>
            Therefore I sought to use technology to help people manage their
            symptoms and improve their overall quality of life. This allowed me
            to see the importance of maintaining a smooth, easy to navigate user
            experience that is accessible to all people.
         </Typography>
      </motion.div>
   );
};

export default About;
