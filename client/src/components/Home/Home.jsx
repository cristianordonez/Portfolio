import React, { useState, useEffect } from 'react';
import './Home.scss';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';
import axios from 'axios';
import { motion } from 'framer-motion';

import CssBaseline from '@mui/material/CssBaseline';

const About = React.lazy(() => import('./about-page/About.jsx'));
const ProjectList = React.lazy(() =>
   import('./project-page/project-list/ProjectList.jsx')
);
const Contact = React.lazy(() => import('./contact-page/Contact.jsx'));
import Sidebar from './sidebar/Sidebar.jsx';

const Home = () => {
   const [repos, setRepos] = useState([]);
   const containerVariant = {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      transition: { easeInOut: [0.17, 0.67, 0.83, 0.67] },
   };
   useEffect(() => {
      axios
         .get('/api/repos')
         .then((repos) => {
            setRepos(repos.data);
         })
         .catch((err) => {
            console.log('err.response:', err.response);
         });
   }, []);

   return (
      <motion.div
         className='home'
         variant={containerVariant}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <div className='home-main-content'>
            <CssBaseline />
            <Sidebar />
            <Element className='home-page-content' id='home'>
               <React.Suspense fallback={'Loading...'}>
                  <About />
               </React.Suspense>
            </Element>
            <Element className='home-page-content' id='projects'>
               <React.Suspense fallback={'Loading...'}>
                  <ProjectList repos={repos} />
               </React.Suspense>
            </Element>
            <Element className='home-page-content' id='contact'>
               <React.Suspense fallback={'Loading...'}>
                  <Contact />
               </React.Suspense>
            </Element>
         </div>
      </motion.div>
   );
};

export default Home;
