import React, { useState } from 'react';
import './Navbar.scss';
import Link from 'react-scroll/modules/components/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import Box from '@mui/material/Box';

const Nav = () => {
   // const [anchorElNav, setAnchorElNav] =
   //    (React.useState < null) | (HTMLElement > null);
   // const [anchorElUser, setAnchorElUser] =
   //    (React.useState < null) | (HTMLElement > null);

   // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
   //    setAnchorElNav(event.currentTarget);
   // };
   // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
   //    setAnchorElUser(event.currentTarget);
   // };

   // const handleCloseNavMenu = () => {
   //    setAnchorElNav(null);
   // };

   // const handleCloseUserMenu = () => {
   //    setAnchorElUser(null);
   // };
   const [isOpen, setOpen] = useState(false);
   const handleOpen = () => {
      setOpen(!isOpen);
   };
   return (
      <div className='navbar'>
         {/* <div className='navbar-links'> */}
         {['home', 'about', 'projects', 'contact'].map((text, index) => (
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
         {/* </div> */}
         <Box
            sx={{
               flexGrow: 1,
               display: { xs: 'flex', md: 'none' },
            }}
         >
            <IconButton
               size='large'
               aria-label='account of current user'
               onClick={handleOpen}
               color='inherit'
            >
               <MenuIcon />
            </IconButton>
            <Popper
               open={isOpen}
               placement='bottom-start'
               transition
               disablePortal
            >
               <Paper>
                  <ClickAwayListener onClickAway={handleOpen}>
                     <MenuList
                        autoFocusItem={isOpen}
                        id='composition-menu'
                        aria-labelledby='composition-button'
                     >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                     </MenuList>
                  </ClickAwayListener>
               </Paper>
            </Popper>
         </Box>

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
