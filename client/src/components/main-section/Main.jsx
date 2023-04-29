import CssBaseline from '@mui/material/CssBaseline';
import React, { lazy, Suspense, useRef } from 'react';
import Element from 'react-scroll/modules/components/Element';
import useIntersectionObserver from '../../Hooks/useIntersectionObserver.jsx';
import './Main.scss';
import Navbar from './navbar/Navbar.jsx';

const ProjectList = lazy(() =>
   import('./project-page/project-list/ProjectList.jsx')
);
const Contact = lazy(() => import('./contact-page/Contact.jsx'));
const About = lazy(() => import('./about-page/About.jsx'));
const Footer = lazy(() => import('./footer/Footer.jsx'));

export default function Main() {
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
         <section ref={aboutSection} id='about' className='main-section'>
            <Element id='element-section'>
               <Suspense fallback={<></>}>
                  <About />
               </Suspense>
            </Element>
         </section>
         <section ref={projectSection} id='projects' className='main-section'>
            {isAboutSectionVisible && (
               <Element id='element-section'>
                  <Suspense fallback={<></>}>
                     <ProjectList isVisible={isProjectSectionVisible} />
                  </Suspense>
               </Element>
            )}
         </section>
         <section ref={contactSection} id='contact' className='main-section'>
            {isAboutSectionVisible && (
               <Element id='element-section'>
                  <Suspense fallback={<></>}>
                     <Contact isVisible={isContactSectionVisible} />
                  </Suspense>
               </Element>
            )}
         </section>
         <section id='footer'>
            <Footer />
         </section>
      </div>
   );
}
