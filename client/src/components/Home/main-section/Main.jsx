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

const Main = () => {
   const contactSection = useRef(null);
   const projectSection = useRef(null);
   const isContactSectionVisible = useIntersectionObserver(contactSection);
   const isProjectSectionVisible = useIntersectionObserver(projectSection);

   return (
      <div className='main'>
         <CssBaseline />
         {/* <Sidebar
            isProjectVisible={isProjectSectionVisible}
            isContactVisible={isContactSectionVisible}
         /> */}
         <Navbar />
         <section ref={projectSection} className='main-projects'>
            {isProjectSectionVisible && (
               <Element id='projects'>
                  <Suspense fallback={''}>
                     <ProjectList isVisible={isProjectSectionVisible} />
                  </Suspense>
               </Element>
            )}
         </section>
         <section ref={contactSection} className='main-contact'>
            {isProjectSectionVisible && (
               <Element id='contact'>
                  <Suspense fallback={''}>
                     <Contact isVisible={isContactSectionVisible} />
                  </Suspense>
               </Element>
            )}
         </section>
      </div>
   );
};

export default Main;
