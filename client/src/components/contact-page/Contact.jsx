import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import './Contact.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rocket from './rocket-svg/Rocket.jsx';
import axios from 'axios';

const Contact = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      let requestData = { name, email, subject, message };
      let promise = axios.post('/api/contact', requestData);
      promise.then((response) => {
         console.log('response:', response);
      });
      promise.catch((error) => {
         console.log('error:', error);
      });
   };
   return (
      <div className='contact-container'>
         <Typography align='center' variant='h1'>
            Contact Me
         </Typography>
         <div className='contact-inner-container'>
            <form className='contact-form' onSubmit={handleSubmit}>
               <TextField
                  InputProps={{ className: 'contact-form-textfield' }}
                  fullWidth
                  required
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
               <TextField
                  InputProps={{ className: 'contact-form-textfield' }}
                  fullWidth
                  required
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <TextField
                  InputProps={{ className: 'contact-form-textfield' }}
                  fullWidth
                  required
                  placeholder='Subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
               />
               <TextField
                  InputProps={{ className: 'contact-form-textfield' }}
                  fullWidth
                  required
                  placeholder='Message'
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               />
               <Button
                  fullWidth
                  className='contact-form-button'
                  color='secondary'
                  type='submit'
                  variant='contained'
               >
                  Send Message
               </Button>
            </form>
            <div>
               <Rocket />
            </div>
         </div>
      </div>
   );
};

export default Contact;
