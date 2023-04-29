import { Typography } from '@mui/material';
import './Footer.scss';

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <div className='footer-container'>
         <Typography>Developed by Cristian Ordonez @ {currentYear}</Typography>
      </div>
   );
}
