import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './Home/landing-page/LandingPage.jsx';
const Home = lazy(() => import('./Home/Home.jsx'));

const App = () => {
   const location = useLocation();

   return (
      <Routes location={location} key={location.pathname}>
         <Route path='/' element={<LandingPage />} />
         <Route
            path='/about'
            element={
               <Suspense fallback={<></>}>
                  <Home />
               </Suspense>
            }
         />
      </Routes>
   );
};

export default App;
