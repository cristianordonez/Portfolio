import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar-page/Sidebar.jsx';
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
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';

// import { Routes, Route, Link } from 'react-router-dom';
const Home = React.lazy(() => import('./home-page/Home.jsx'));
// const MySkills = React.lazy(() => import('./skills-page/MySkills.jsx'));
const ProjectList = React.lazy(() =>
   import('./project-page/project-list/ProjectList.jsx')
);
const Contact = React.lazy(() => import('./contact-page/Contact.jsx'));

const App = () => {
   const [repos, setRepos] = useState([]);

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

   const rootStyle = {
      minHeight: '100%',
      minWidth: '100%',
      backgroundColor: '#081426',
   };
   const mainContentStyle = {
      paddingLeft: '30%',
      paddingRight: '20%',
   };
   const pageContentStyle = {
      minHeight: '100vh',
   };

   return (
      <div style={rootStyle}>
         <CssBaseline />
         <Sidebar />
         <Box style={mainContentStyle}>
            <Element style={pageContentStyle} id='home'>
               <React.Suspense fallback={'Loading...'}>
                  <Home />
               </React.Suspense>
            </Element>
            <Element style={pageContentStyle} id='projects'>
               <React.Suspense fallback={'Loading...'}>
                  <ProjectList repos={repos} />
               </React.Suspense>
            </Element>
            <Element style={pageContentStyle} id='contact'>
               <React.Suspense fallback={'Loading...'}>
                  <Contact />
               </React.Suspense>
            </Element>
         </Box>
      </div>
   );
};

export default App;
