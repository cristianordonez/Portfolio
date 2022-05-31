import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import './Home.scss';
import { Element } from 'react-scroll';
import CssBaseline from '@mui/material/CssBaseline';
import useIntersectionObserver from '../../Hooks/useIntersectionObserver.jsx';
import Sidebar from './sidebar/Sidebar.jsx';
import About from './about-page/About.jsx';
import ProjectList from './project-page/project-list/ProjectList.jsx';
import Contact from './contact-page/Contact.jsx';

const Home = () => {
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
            <Element>
               <Suspense fallback={''}>
                  <ProjectList isVisible={isProjectSectionVisible} />
               </Suspense>
            </Element>
         </section>
         <section id='contact' ref={contactSection} className='home-contact'>
            <Element>
               <Suspense fallback={''}>
                  <Contact isVisible={isContactSectionVisible} />
               </Suspense>
            </Element>
         </section>
      </div>
   );
};

export default Home;
