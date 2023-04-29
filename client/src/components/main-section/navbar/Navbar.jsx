import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import React, { useState } from 'react';
import Link from 'react-scroll/modules/components/Link';
import './Navbar.scss';

export default function Nav() {
   const [isOpen, setOpen] = useState(false);
   const handleOpen = () => {
      setOpen(!isOpen);
   };
   return (
      <div className='navbar'>
         <Box
            sx={{
               flexGrow: 1,
               display: { xs: 'none', md: 'flex' },
               gap: 5,
            }}
         >
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
         </Box>
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
                        {['home', 'about', 'projects', 'contact'].map(
                           (text, index) => (
                              <MenuItem key={index}>
                                 <Link
                                    className='navlink'
                                    key={index}
                                    activeClass='navlink-active'
                                    to={text}
                                    spy={true}
                                    onClick={handleOpen}
                                 >
                                    {text.charAt(0).toUpperCase() +
                                       text.slice(1)}
                                 </Link>
                              </MenuItem>
                           )
                        )}
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
               href='https://www.linkedin.com/in/cristian-ordonez-rd/'
               size='large'
            >
               <LinkedInIcon fontSize='inherit' color='secondary' />
            </IconButton>
         </div>
      </div>
   );
}
