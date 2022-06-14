import React, { lazy } from 'react';
import './App.scss';
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
