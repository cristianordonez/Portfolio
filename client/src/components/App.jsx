import React, { lazy } from 'react';
import './App.scss';
import Landing from './main-section/landing-page/Landing.jsx';

const Main = lazy(() => import('./main-section/Main.jsx'));

export default function App() {
   return (
      <>
         <Landing />
         <Main />
      </>
   );
}
