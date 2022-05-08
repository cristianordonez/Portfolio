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
         {/* <Box >
            <img
               className='animate__animated animate__bounce animate__delay-0.5s'
               src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'
            ></img>
            <img
               className='animate__animated animate__bounce animate__delay-0.5s'
               src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
            ></img>
            <img
               className='animate__animated animate__bounce animate__delay-0.6s'
               src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'
            ></img>
            <img
               className='animate__animated animate__bounce animate__delay-0.8s'
               src='https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white'
            ></img>
            <img
               className='animate__animated animate__bounce animate__delay-1s'
               src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'
            ></img>
            <img
               className='animate__animated animate__bounce animate__delay-1.2s'
               src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
            ></img>
            <img
               className='animate__animated animate__bounce animate__delay-1.4s'
               src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
            ></img>
            <img
               className='animate__animated animate__bounce animate__delay-1.6s'
               src='https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white'
            ></img>
            <img
               className='animate__animated animate__bounce animate__delay-1.8s'
               src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white'
            ></img>
         </Box> */}
      </Box>
   );
};

export default Home;
