import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar-page/Sidebar.jsx';
import * as Scroll from 'react-scroll';
import Rocket from './contact-page/rocket-svg/Rocket.jsx';
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

const Home = React.lazy(() => import('./home-page/Home.jsx'));
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

   return (
      <div className='app'>
         <CssBaseline />
         <Sidebar />
         <Box className='app-main-content'>
            <Element className='app-main-content-page-content' id='home'>
               <React.Suspense fallback={'Loading...'}>
                  <Home />
               </React.Suspense>
            </Element>
            <Element className='app-main-content-page-content' id='projects'>
               <React.Suspense fallback={'Loading...'}>
                  <ProjectList repos={repos} />
               </React.Suspense>
            </Element>
            <Element className='app-main-content-page-content' id='contact'>
               <React.Suspense fallback={'Loading...'}>
                  <Contact />
               </React.Suspense>
            </Element>
         </Box>
      </div>
   );
};

export default App;
