import React, { useRef, lazy, Suspense } from 'react';
import './Main.scss';
import CssBaseline from '@mui/material/CssBaseline';
import Element from 'react-scroll/modules/components/Element';
import useIntersectionObserver from '../../../Hooks/useIntersectionObserver.jsx';
import Navbar from './navbar/Navbar.jsx';

const ProjectList = lazy(() =>
   import('./project-page/project-list/ProjectList.jsx')
);
const Contact = lazy(() => import('./contact-page/Contact.jsx'));
const About = lazy(() => import('./about-page/About.jsx'));

const Main = () => {
   //used to see if these sections are in viewport
   const contactSection = useRef(null);
   const projectSection = useRef(null);
   const aboutSection = useRef(null);
   //contact section uses projectSection to render so that there are no issues with scrolling
   //contact section does get its ref however to start animation
   const isContactSectionVisible = useIntersectionObserver(contactSection);
   const isProjectSectionVisible = useIntersectionObserver(projectSection);
   const isAboutSectionVisible = useIntersectionObserver(aboutSection);

   console.log('isProjectSectionVisible:', isProjectSectionVisible);
   return (
      <div className='main'>
         <CssBaseline />
         <Navbar />
         <section ref={aboutSection} className='main-about'>
            {/* {isAboutSectionVisible && ( */}
            <Element id='about'>
               <Suspense fallback={<></>}>
                  <About />
               </Suspense>
            </Element>
            {/* )} */}
         </section>
         <section ref={projectSection} className='main-projects'>
            {/* {isProjectSectionVisible && ( */}
            <Element id='projects'>
               <Suspense fallback={<></>}>
                  <ProjectList isVisible={isProjectSectionVisible} />
               </Suspense>
            </Element>
            {/* )} */}
         </section>
         <section ref={contactSection} className='main-contact'>
            {/* {isProjectSectionVisible && ( */}
            <Element id='contact'>
               <Suspense fallback={<></>}>
                  <Contact isVisible={isContactSectionVisible} />
               </Suspense>
            </Element>
            {/* )} */}
         </section>
      </div>
   );
};

export default Main;
