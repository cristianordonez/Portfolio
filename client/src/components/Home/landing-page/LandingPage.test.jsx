import React from 'react';
import LandingPage from './LandingPage.jsx';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import 'regenerator-runtime/runtime';

test('Landing page renders correctly', async () => {
   render(<LandingPage />, { wrapper: MemoryRouter });
   expect(screen.getByTestId('landing-page')).toBeDefined();
});

test('Is rendered with a link to the main page', async () => {
   render(<LandingPage />, { wrapper: MemoryRouter });
   expect(screen.getByTestId('landing-page-link')).toBeDefined();
});
