import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
   palette: {
      type: 'light',
      primary: {
         main: '#081426',
      },
      secondary: {
         main: '#f50057',
      },
      background: {
         default: '#081426',
         paper: '#081426',
      },
      text: {
         primary: '#ffffff',
         secondary: '#ffe2fe',
      },
      divider: '#909096',
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
   },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <App />
      </ThemeProvider>
   </BrowserRouter>
);
