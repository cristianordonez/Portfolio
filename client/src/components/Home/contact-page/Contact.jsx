import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import './Contact.scss';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Rocket from './rocket-svg/Rocket.jsx';
import axios from 'axios';

const Contact = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');
   const [beginAnimation, setBeginAnimation] = useState(false);
   const [open, setOpen] = useState(false);
   const [openError, setOpenError] = useState(false);
   //handles sending email from server using nodemailer
   const handleSubmit = (e) => {
      setBeginAnimation(true);
      e.preventDefault();
      let requestData = { name, email, subject, message };
      let promise = axios.post('/api/contact', requestData);
      promise.then((response) => {
         console.log('response:', response);
         setOpenError(false);
         setOpen(true);
         setName('');
         setEmail('');
         setSubject('');
         setMessage('');
         setTimeout(() => {
            setBeginAnimation(false);
         }, '3000');
      });
      promise.catch((error) => {
         setOpenError(true);
         console.log('error:', error);
      });
   };
   const handleClose = () => {
      setOpen(false);
      setOpenError(false);
   };
   return (
      <div className='contact-container' data-testid='contact-container'>
         <Typography align='center' variant='h2'>
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
                  data-testid='submit-form-btn'
                  color='secondary'
                  type='submit'
                  variant='contained'
               >
                  Send Message
               </Button>
            </form>
         </div>
         {beginAnimation && <Rocket />}
         <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}
            open={open}
            autoHideDuration={5000}
         >
            <Alert onClose={handleClose} severity='success'>
               Your message has been sent! I will get back to you as soon as
               possible.
            </Alert>
         </Snackbar>
         <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}
            open={openError}
            autoHideDuration={5000}
         >
            <Alert onClose={handleClose} severity='error'>
               Your message has been sent! I will get back to you as soon as
               possible.
            </Alert>
         </Snackbar>
      </div>
   );
};

export default Contact;
