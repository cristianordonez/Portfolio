import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import './Index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

{
   /* <ThemeProvider theme={theme}> */
}
// </ThemeProvider>

root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

{
   /* <Route path='/home' element={<App />}></Route> */
}
{
   /* <Route path='/' element={<LandingPage />}></Route> */
}

// root.render(
//    <BrowserRouter>
//       <ThemeProvider theme={theme}>
//          <AnimatePresence>
//             <Routes>
//                <Route path='/' element={<LandingPage />}></Route>
//                <Route path='/home' element={<App />}></Route>
//             </Routes>
//          </AnimatePresence>
//       </ThemeProvider>
//    </BrowserRouter>
// );
