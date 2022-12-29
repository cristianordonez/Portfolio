import {
   createTheme,
   responsiveFontSizes,
   ThemeProvider,
} from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomTheme from '../CustomTheme.jsx';
import App from './components/App.jsx';
import './Index.scss';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

let theme = createTheme(CustomTheme);
theme = responsiveFontSizes(theme);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <ThemeProvider theme={theme}>
      <App />
   </ThemeProvider>
);
