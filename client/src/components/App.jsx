import React, { useEffect, useState } from 'react';
import Nav from './Nav.jsx';
import * as Scroll from 'react-scroll';

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
   const containerStyle = {
      marginLeft: '15rem',
   };
   return (
      <div className='root'>
         <Nav />
         <Box style={containerStyle}>
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
   );
};

export default App;
