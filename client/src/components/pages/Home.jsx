import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
   const itemStyle = {
      padding: '10px 0',
   };
   return (
      <Box sx={{ paddingTop: '20em' }}>
         <Typography style={itemStyle} variant='subtitle1'>
            Hi, my name is
         </Typography>
         <Typography style={itemStyle} variant='h1'>
            Cristian Ordoñez.
         </Typography>

         <Typography style={itemStyle} variant='body1'>
            I'm a Licensed Registered Dietitian transitioning into a world of
            tech.
         </Typography>

         <Typography variant='body1'>
            During my experience in healthcare I specialized in working with
            individuals in a low socioeconomic status, a population that
            struggles with healthcare disparities such as lower access to and
            use of care.
         </Typography>
         <Typography style={itemStyle} variant='body1'>
            Therefore I sought to use technology to help people manage their
            symptoms and improve their overall quality of life. This allowed me
            to see the importance of maintaining a smooth, easy to navigate user
            experience that is accessible to all people.
         </Typography>
      </Box>
   );
};

export default Home;
