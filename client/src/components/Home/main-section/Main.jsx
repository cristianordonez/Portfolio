import CssBaseline from '@mui/material/CssBaseline';
import React, { lazy, Suspense, useRef } from 'react';
import Element from 'react-scroll/modules/components/Element';
import useIntersectionObserver from '../../../Hooks/useIntersectionObserver.jsx';
import './Main.scss';
import Navbar from './navbar/Navbar.jsx';

const ProjectList = lazy(() =>
   import('./project-page/project-list/ProjectList.jsx')
);
const Contact = lazy(() => import('./contact-page/Contact.jsx'));
const About = lazy(() => import('./about-page/About.jsx'));

const Main = () => {
   //used to see if these sections are in viewport
   const contactSection = useRef(null);
   const projectSection = useRef(null); //contact section uses projectsection to render so that there are no issues with scrolling
   const aboutSection = useRef(null);
   const isContactSectionVisible = useIntersectionObserver(contactSection); //contact section does get its ref to start animation
   const isProjectSectionVisible = useIntersectionObserver(projectSection);
   const isAboutSectionVisible = useIntersectionObserver(aboutSection);

   return (
      <div className='main'>
         <CssBaseline />
         <Navbar />
         <section ref={aboutSection} className='main-about'>
            <Element id='about'>
               <Suspense fallback={<></>}>
                  <About />
               </Suspense>
            </Element>
         </section>
         <section ref={projectSection} className='main-projects'>
            {isAboutSectionVisible && (
               <Element id='projects'>
                  <Suspense fallback={<></>}>
                     <ProjectList isVisible={isProjectSectionVisible} />
                  </Suspense>
               </Element>
            )}
         </section>
         <section ref={contactSection} className='main-contact'>
            {isAboutSectionVisible && (
               <Element id='contact' className='contact'>
                  <Suspense fallback={<></>}>
                     <Contact isVisible={isContactSectionVisible} />
                  </Suspense>
               </Element>
            )}
         </section>
      </div>
   );
};

export default Main;
