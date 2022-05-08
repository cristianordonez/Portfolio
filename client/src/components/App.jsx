import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar.jsx';
import * as Scroll from 'react-scroll';
import './styles/app.css';
import LandingPage from '../img/../img/LandingPage.jsx';
import Test from '../landing-page_1.svg';
import {
   Link,
   Button,
   Element,
   Events,
   animateScroll as scroll,
   scrollSpy,
   scroller,
} from 'react-scroll';
import Box from '@mui/material/Box';

// import { Routes, Route, Link } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home.jsx'));
const MySkills = React.lazy(() => import('./pages/MySkills.jsx'));
const Projects = React.lazy(() => import('./pages/Projects.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));

const App = () => {
   // const containerStyle = {
   //    marginLeft: '15rem',
   // };
   // const rootStyle = {
   //    minHeight: '100vh',
   //    minWidth: '100vw',
   // };
   return (
      <div className='curtain'>
         <div className='curtain_wrapper'>
            <input type='checkbox' />
            <div className='curtain_panel'>
               <LandingPage style={{ height: '100%' }} />
               {/* <img style={{ height: '100%' }} src={Test}></img> */}
            </div>
            <div className='curtain_prize'>
               <Sidebar />
               <Box>
                  <Element id='home'>
                     <React.Suspense fallback={'Loading...'}>
                        <Home />
                     </React.Suspense>
                  </Element>
                  <Element id='myskills'>
                     <React.Suspense fallback={'Loading...'}>
                        <MySkills />
                     </React.Suspense>
                  </Element>
                  <Element id='projects'>
                     <React.Suspense fallback={'Loading...'}>
                        <Projects />
                     </React.Suspense>
                  </Element>
                  <Element id='contact'>
                     <React.Suspense fallback={'Loading...'}>
                        <Contact />
                     </React.Suspense>
                  </Element>
               </Box>
            </div>
            {/* <div className='curtain_panel curtain_panel--right'></div> */}
         </div>
      </div>
   );
};

export default App;
