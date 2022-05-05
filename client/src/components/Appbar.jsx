import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

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
const drawerWidth = 240;

const Appbar = () => {
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
            <Toolbar />
            <Divider />

            <List>
               {['home', 'myskills', 'projects', 'contact'].map(
                  (text, index) => (
                     <ListItem>
                        <ListItemIcon>
                           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <Link
                           activeClass='active'
                           to={text}
                           spy={true}
                           smooth={true}
                           offset={-70}
                           duration={600}
                        >
                           {text}
                        </Link>
                     </ListItem>
                  )
               )}
            </List>
         </Drawer>
      </div>
   );
};

export default Appbar;
