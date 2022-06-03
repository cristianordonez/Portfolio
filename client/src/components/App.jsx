import React, { lazy } from 'react';
import './App.scss';
import LandingPage from './Home/landing-page/LandingPage.jsx';
const Main = lazy(() => import('./Home/main-section/Main.jsx'));

const App = () => {
   return (
      <>
         <LandingPage />
         <Main />
      </>
   );
};

export default App;
