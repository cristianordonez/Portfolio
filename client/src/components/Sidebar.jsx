import React from 'react';
import './styles/nav.css';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from '../img/logo.svg';
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
   const logoStyle = {
      height: '10rem',
      width: '10rem',
   };
   const listStyle = {
      marginTop: '15rem',
   };
   const listItemStyle = {
      display: 'flex',
      justifyContent: 'center',
      padding: '10px 0',
   };
   const iconLinksStyle = {
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
   };
   // const iconStyle = {
   //    color:
   // }

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
         <img src={Logo} style={logoStyle}></img>
         <List style={listStyle}>
            <Divider />
            {['home', 'myskills', 'projects', 'contact'].map((text, index) => (
               <React.Fragment key={index}>
                  <ListItem style={listItemStyle} button key={index}>
                     <Link
                        activeClass='active'
                        to={text}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        {index === 1
                           ? 'My Skills'
                           : text.charAt(0).toUpperCase() + text.slice(1)}
                     </Link>
                  </ListItem>
                  <Divider />
               </React.Fragment>
            ))}
         </List>
         <Box style={iconLinksStyle}>
            <IconButton
               target='_blank'
               href='https://www.linkedin.com/in/cristian-ordonez-rd/'
            >
               <LinkedInIcon />
            </IconButton>
            <IconButton
               target='_blank'
               href='https://github.com/cristianordonez'
            >
               <GitHubIcon />
            </IconButton>
         </Box>
      </Drawer>
   );
};

export default Sidebar;
