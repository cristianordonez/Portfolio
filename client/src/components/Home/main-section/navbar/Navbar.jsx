import React from 'react';
import './Navbar.scss';
import Link from 'react-scroll/modules/components/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Nav = () => {
   return (
      <div className='navbar'>
         <div className='navbar-links'>
            {['home', 'about', 'projects', 'contt'].map((text, index) => (
               <Link
                  className='navlink'
                  key={index}
                  activeClass='navlink-active'
                  to={text}
                  spy={true}
               >
                  {text.charAt(0).toUpperCase() + text.slice(1)}
               </Link>
            ))}
         </div>
         <div className='navbar-icons'>
            <IconButton
               aria-label='link to repo'
               className='icon-button'
               target='_blank'
               data-testid='github button'
               href='https://github.com/cristianordonez'
               size='large'
            >
               <GitHubIcon fontSize='inherit' color='secondary' />
            </IconButton>
            <IconButton
               aria-label='link to repo'
               className='icon-button'
               target='_blank'
               data-testid='linkedin button'
               href='https://www.linkedin.com/'
               size='large'
            >
               <LinkedInIcon fontSize='inherit' color='secondary' />
            </IconButton>
         </div>
      </div>
   );
};

export default Nav;
