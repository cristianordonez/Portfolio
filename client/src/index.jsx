import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './Index.scss';
import {
   createTheme,
   ThemeProvider,
   responsiveFontSizes,
} from '@mui/material/styles';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
import CustomTheme from '../CustomTheme.jsx';

const theme = createTheme(CustomTheme);

// theme = responsiveFontSizes(theme);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <ThemeProvider theme={theme}>
      <App />
   </ThemeProvider>
);
