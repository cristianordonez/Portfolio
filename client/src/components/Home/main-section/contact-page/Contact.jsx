import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState } from 'react';
import './Contact.scss';

const Contact = ({ isVisible }) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');
   const [open, setOpen] = useState(false);
   const [openError, setOpenError] = useState(false);

   //handles sending email from server using nodemailer
   const handleSubmit = (e) => {
      e.preventDefault();
      let requestData = { name, email, subject, message };
      let url = `${__API__}/contact`;

      let promise = axios.post(url, requestData);
      promise.then((response) => {
         setOpenError(false);
         setOpen(true);
         setName('');
         setEmail('');
         setSubject('');
         setMessage('');
      });
      promise.catch((error) => {
         setOpenError(true);
      });
   };

   const handleClose = () => {
      setOpen(false);
      setOpenError(false);
   };

   let currentClass = isVisible
      ? 'contact-container animate-contact'
      : 'contact-container';

   return (
      <div className={currentClass} data-testid='contact-container'>
         <Typography align='left' sx={{ alignSelf: 'flex-start' }} variant='h2'>
            Contact Me
         </Typography>
         <Typography variant='body1' className='contact-text' align='left'>
            Interested in working together? Get in touch by filling out the form
            below and I will get back to you as soon as I can.
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
         <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            onClose={handleClose}
            open={openError}
            autoHideDuration={5000}
         >
            <Alert onClose={handleClose} severity='error'>
               Your message was unable to send. Please try again later, or reach
               me at my LinkedIn account.
            </Alert>
         </Snackbar>
      </div>
   );
};

export default Contact;
