import React, { useState } from 'react';
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './Home/landing-page/LandingPage.jsx';
import Home from './Home/Home.jsx';
import {
   motion,
   AnimatePresence,
   useViewportScroll,
   useReducedMotion,
} from 'framer-motion';

const App = () => {
   const location = useLocation();
   //// const shouldReduceMotion = useReducedMotion();
   //// let animate = shouldReduceMotion
   ////    ? { opacity: 0 }
   ////    : {
   ////         scale: 0.5,
   ////         opacity: 0,
   ////         transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
   ////      };

   const containerVariant = {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      transition: { easeInOut: [0.17, 0.67, 0.83, 0.67] },
   };
   return (
      <AnimatePresence className='app' exitBeforeEnter>
         <Routes location={location} key={location.pathname}>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<Home />} />
         </Routes>
      </AnimatePresence>

      // variants={containerVariant}
      // initial='initial'
      // animate='animate'
      // exit='exit'
      // className='app'
   );
};

export default App;
