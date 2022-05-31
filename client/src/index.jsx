import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './Index.scss';
import { BrowserRouter, Routes } from 'react-router-dom';
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
         main: '#0a1929',
      },
      secondary: {
         main: '#a1e8cc',
      },
      neutral: {
         main: '#d5e0ea',
      },
      contrast: {
         main: '#a1e8cc',
      },
      background: {
         default: '#2A2A2A',
         paper: '#0a1929',
      },
      text: {
         primary: '#d5e0ea',
         secondary: '#d5e0ea',
      },
      divider: '#4E5558',
      textfield: '#d5e0ea',
   },
   typography: {
      fontFamily: '"Josefin Sans", "Helvetica", "Arial", sans-serif',
      h1: {
         fontSize: '5rem',
         fontWeight: 500,
         fontFamily: '"Josefin Sans", "Helvetica", "Arial", sans-serif',
         color: '#F3C969',
      },
      h2: {
         fontSize: '4.5rem',
         color: '#5dfdcb',
      },
      h3: {
         color: '#F3C969',
         fontSize: '4.5vw',
      },
      h4: {
         fontSize: '2rem',
      },
      body1: {
         fontSize: '1.3rem',
         color: '#d5e0ea',
      },
      body2: {
         fontSize: '1.6vw',
         color: '#d5e0ea',
      },
      subtitle1: {
         fontSize: '1.6vw',
         color: '#5dfdcb',
      },
   },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <ThemeProvider theme={theme}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </ThemeProvider>
);
