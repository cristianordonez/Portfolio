import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import './Home.scss';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import CssBaseline from '@mui/material/CssBaseline';
import useIntersectionObserver from '../../Hooks/useIntersectionObserver.jsx';
import Sidebar from './sidebar/Sidebar.jsx';
import About from './about-page/About.jsx';

const ProjectList = lazy(() =>
   import(
      /* webpackChunkName: "ProjectList" */
      './project-page/project-list/ProjectList.jsx'
   )
);
const Contact = lazy(() =>
   import(/* webpackChunkName: "Contact" */ './contact-page/Contact.jsx')
);

const Home = () => {
   const containerVariant = {
      initial: { opacity: 1, scale: 0.5 },
      animate: { opacity: 1, scale: 2 },
      exit: { opacity: 0, scale: 0.5 },
      transition: { easeInOut: [0.17, 0.67, 0.83, 0.67] },
   };

   const contactSection = useRef(null);
   const projectSection = useRef(null);
   const isContactSectionVisible = useIntersectionObserver(contactSection);
   const isProjectSectionVisible = useIntersectionObserver(projectSection);

   return (
      <div className='home'>
         <CssBaseline />
         <Sidebar />
         <Element className='home-about' id='about'>
            <About />
         </Element>
         <section id='projects' ref={projectSection} className='home-projects'>
            {isProjectSectionVisible && (
               <Element>
                  <Suspense fallback={''}>
                     <ProjectList />
                  </Suspense>
               </Element>
            )}
         </section>
         <section id='contact' ref={contactSection} className='home-contact'>
            {isContactSectionVisible && (
               <Element>
                  <Suspense fallback={''}>
                     <Contact />
                  </Suspense>
               </Element>
            )}
         </section>
      </div>
   );
};

export default Home;
