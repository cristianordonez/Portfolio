import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar.jsx';
import * as Scroll from 'react-scroll';
import './styles/app.css';
import LandingPage from './pages/LandingPage.jsx';
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
import axios from 'axios';

// import { Routes, Route, Link } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home.jsx'));
const MySkills = React.lazy(() => import('./pages/MySkills.jsx'));
const ProjectList = React.lazy(() =>
   import('./pages/project-components/ProjectList.jsx')
);
const Contact = React.lazy(() => import('./pages/Contact.jsx'));

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

   // const rootStyle = {
   //    minHeight: '100vh',
   //    minWidth: '100vw',
   // };

   return (
      <div className='curtain'>
         <div className='curtain_wrapper'>
            <input type='checkbox' />
            <div className='curtain_cover'>
               <LandingPage />
            </div>
            <div className='main_content'>
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
                  <Element id='projectlist'>
                     <React.Suspense fallback={'Loading...'}>
                        <ProjectList repos={repos} />
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
