import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.scss';
import App from './components/App.jsx';
import LandingPage from './components/landing-page/LandingPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
   zIndex: {
      typography: 1,
      drawer: 1,
      box: 1,
   },
   palette: {
      type: 'light',
      primary: {
         main: '#06101e',
      },
      secondary: {
         main: '#A3FCFA',
      },
      neutral: {
         main: '#a3fcfa',
      },
      contrast: {
         main: '#f07c41',
      },
      background: {
         default: '#2A2A2A',
         paper: '#081426',
      },
      text: {
         primary: '#ffffff',
         secondary: '#FFFFFF',
      },
      divider: '#4E5558',
      textfield: '#1A2027',
   },
   typography: {
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      h1: {
         fontSize: '5rem',
         fontWeight: 500,
         fontFamily: '"Josefin Sans", "Helvetica", "Arial", sans-serif',
      },
      h2: {
         fontSize: '2.5rem',
      },
      h3: {
         fontSize: '2.2rem',
      },
      h4: {
         fontSize: '2rem',
      },
      body1: {
         fontSize: '1.1rem',
      },
      subtitle1: {
         color: '#A3FCFA',
      },
   },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
      <ThemeProvider theme={theme}>
         <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/home' element={<App />}></Route>
         </Routes>
      </ThemeProvider>
   </BrowserRouter>
);
