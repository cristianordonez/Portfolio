import React from 'react';
import Typography from '@mui/material/Typography';
import '../styles/home.css';
import Box from '@mui/material/Box';
import 'animate.css';

const Home = () => {
   // const boxStyle = {
   //    display: 'flex-column',
   //    width: '50%',
   // };
   return (
      <Box>
         <Box>
            <Typography>hi my name is</Typography>
            <Typography variant='h1'>Cristian Ordoñez.</Typography>
            <Typography>
               I'm a Licensed Registered Dietitian transitioning into a world of
               tech.
            </Typography>
            <Typography>
               During my experience in healthcare I specialized in working with
               individuals in a low socioeconomic status, a population that
               struggles with healthcare disparities such as lower access to and
               use of care.
            </Typography>
            <Typography>
               Therefore I sought to use technology to help people manage their
               symptoms and improve their overall quality of life. This allowed
               me to see the importance of maintaining a smooth, easy to
               navigate user experience that is accessible to all people.
            </Typography>
         </Box>
      </Box>
   );
};

export default Home;
