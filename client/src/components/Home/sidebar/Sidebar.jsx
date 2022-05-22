import React, { useState } from 'react';
import './sidebar.scss';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { motion, useReducedMotion } from 'framer-motion';

import Logo from './logo.svg';
import * as Scroll from 'react-scroll';
import {
   Link,
   Button,
   Element,
   Events,
   animateScroll as scroll,
   scrollSpy,
   scroller,
   ScrollLink,
} from 'react-scroll';

const drawerWidth = 160;

const Sidebar = () => {
   const [isHovered, setIsHovered] = useState(false);

   const handleClick = (e) => {
      console.log('e.target:', e.target);
      scroller.scrollTo(e.target.value, {
         duration: 500,
         smooth: true,
      });
   };
   return (
      <Drawer
         variant='permanent'
         sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
               width: drawerWidth,
               boxSizing: 'border-box',
            },
         }}
         anchor='left'
      >
         <img src={Logo}></img>
         <List className='sidebar-list'>
            <Divider className='sidebar-list-divider' />
            {['home', 'projects', 'contact'].map((text, index) => (
               <React.Fragment key={index}>
                  <ListItem
                     onMouseOver={() => setIsHovered(true)}
                     onMouseOut={() => setIsHovered(false)}
                     divider={true}
                     className='sidebar-list-item'
                     // button
                     key={index}
                     onClick={handleClick}
                     value={text}
                  >
                     <Link
                        activeClass='active'
                        className='sidebar-link'
                        to={text}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                     >
                        {text.charAt(0).toUpperCase() + text.slice(1)}
                     </Link>
                  </ListItem>
               </React.Fragment>
            ))}
         </List>
         <div className='sidebar-icons'>
            <IconButton
               target='_blank'
               href='https://www.linkedin.com/in/cristian-ordonez-rd/'
            >
               <LinkedInIcon color='secondary' />
            </IconButton>
            <IconButton
               target='_blank'
               href='https://github.com/cristianordonez'
            >
               <GitHubIcon color='secondary' />
            </IconButton>
         </div>
      </Drawer>
   );
};

export default Sidebar;
