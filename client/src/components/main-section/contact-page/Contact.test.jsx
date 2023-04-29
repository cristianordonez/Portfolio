import React from 'react';
import Contact from './Contact.jsx';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axiosMock from 'axios';
import 'regenerator-runtime/runtime';

test('Contact page renders correctly', async () => {
   render(<Contact />);
   expect(screen.getByTestId('contact-container')).toBeDefined();
});

test('Forms are sent correctly', async () => {
   const user = userEvent.setup();
   render(<Contact />);
   await user.type(screen.getByPlaceholderText('Name'), 'Cristian');
   await user.type(screen.getByPlaceholderText('Email'), 'test@gmail.com');
   await user.type(screen.getByPlaceholderText('Subject'), 'Test Subject');
   await user.type(
      screen.getByPlaceholderText('Message'),
      'this is a test message'
   );

   let button = screen.getByText('Send Message');
   await user.click(button);
   await waitFor(() => expect(axiosMock.post).toHaveBeenCalled());
});
