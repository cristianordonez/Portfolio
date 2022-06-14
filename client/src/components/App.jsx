import React, { lazy } from 'react';
import './App.scss';
import LandingPage from './Home/landing-page/LandingPage.jsx';
import Landing from './Home/landing-page/Landing.jsx';
const Main = lazy(() => import('./Home/main-section/Main.jsx'));

const App = () => {
   return (
      <>
         <Landing />
         <Main />
      </>
   );
};

export default App;
