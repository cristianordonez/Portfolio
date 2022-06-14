import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './Index.scss';
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
         main: '#5dfdcb',
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
      fontFamily: '"Montserrat",  sans-serif',
      h2: {
         color: '#F3C969',
         fontSize: '3rem',
         fontWeight: 400,
      },
      h3: {
         color: '#5dfdcb',
         fontSize: '2.2rem',
      },
      body1: {
         fontSize: '1.4rem',
         color: '#d5e0ea',
      },
      body2: {
         fontSize: '1.1rem',
         color: '#d5e0ea',
      },
      subtitle1: {
         fontSize: '1rem',
         color: '#F3C969',
      },
   },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <ThemeProvider theme={theme}>
      <App />
   </ThemeProvider>
);
