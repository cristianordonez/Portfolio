import React, { useState } from 'react';
import './sidebar.scss';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
   return (
      <Drawer
         sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
               width: drawerWidth,
               boxSizing: 'border-box',
            },
         }}
         variant='permanent'
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
                     button
                     key={index}
                  >
                     <Link
                        activeClass='active'
                        to={text}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
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
