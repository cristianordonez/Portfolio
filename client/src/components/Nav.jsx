import React from 'react';
import './styles/nav.css';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
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
const drawerWidth = 200;

const Nav = () => {
   const logoStyle = {
      height: '12rem',
      width: '12rem',
   };
   return (
      <div>
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

            <List>
               <Divider />
               {['home', 'myskills', 'projects', 'contact'].map(
                  (text, index) => (
                     <>
                        <ListItem button key={index}>
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
                     </>
                  )
               )}
            </List>
         </Drawer>
      </div>
   );
};

export default Nav;
