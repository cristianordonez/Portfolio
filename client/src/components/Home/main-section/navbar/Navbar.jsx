import React from 'react';
import './Navbar.scss';
import Link from 'react-scroll/modules/components/Link';

const Nav = () => {
   return (
      <div className='navbar'>
         {['home', 'about', 'projects', 'contact'].map((text, index) => (
            <Link
               className='navlink'
               key={index}
               activeClass='navlink-active'
               to={text}
               spy={true}
               // duration={}
            >
               {text.charAt(0).toUpperCase() + text.slice(1)}
            </Link>
         ))}
      </div>
   );
};

export default Nav;
