import React, { useState, useEffect } from 'react';
import './sidebar.scss';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Home from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

import Logo from './logo.svg';
import * as Scroll from 'react-scroll';
import {
   Link,
   Element,
   Events,
   animateScroll as scroll,
   scrollSpy,
   scroller,
   ScrollLink,
} from 'react-scroll';

const drawerWidth = 160;

const Sidebar = ({ isProjectVisible, isContactVisible }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedIndex, setSelectedIndex] = useState(1);
   let navigate = useNavigate();

   const handleClick = (e, index) => {
      setSelectedIndex(index);
      let target = e.target.innerHTML;
      if (target === 'Contact') {
         console.log('here');
         scroller.scrollTo(e.target.innerHTML.toLowerCase(), {
            duration: 500,
            smooth: true,
            offset: 2500,
            // containerId: e.target.innerHTML.toLowerCase(),
         });
      } else {
         scroller.scrollTo(e.target.innerHTML.toLowerCase(), {
            duration: 800,
            smooth: true,
         });
      }
   };

   const handleHomePage = () => {
      scroller.scrollToTop();
   };

   return (
      <Drawer
         variant='persistent'
         open={isOpen}
         transitionDuration={2000}
         sx={{
            position: 'relative',
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
               width: drawerWidth,
               boxSizing: 'border-box',
            },
         }}
         anchor='left'
         data-testid='sidebar'
      >
         <img src={Logo} onClick={handleHomePage} loading='lazy'></img>
         <List className='sidebar-list'>
            <Divider className='sidebar-list-divider' />

            {['about', 'projects', 'contact'].map((text, index) => (
               <React.Fragment key={index}>
                  <ListItem
                     selected={true}
                     divider={true}
                     className='sidebar-list-item'
                  >
                     <Link
                        activeClass='active'
                        className='sidebar-link'
                        to={text}
                        spy={true}
                        smooth={true}
                        isDynamic={true}
                        offset={0}
                        duration={750}
                     >
                        {text.charAt(0).toUpperCase() + text.slice(1)}
                     </Link>
                  </ListItem>
               </React.Fragment>
            ))}
         </List>
         <Tooltip title='Go back to home page'>
            <div className='home-btn'>
               <Button
                  color='contrast'
                  variant='outlined'
                  onClick={handleHomePage}
               >
                  <HomeIcon />
               </Button>
            </div>
         </Tooltip>
         <div className='sidebar-icons'>
            <IconButton
               target='_blank'
               href='https://www.linkedin.com/in/cristian-ordonez-rd/'
               data-testid='linkedin button'
            >
               <LinkedInIcon color='secondary' />
            </IconButton>
            <IconButton
               target='_blank'
               href='https://github.com/cristianordonez'
               data-testid='github button'
            >
               <GitHubIcon color='secondary' />
            </IconButton>
         </div>
      </Drawer>
   );
};

export default Sidebar;
