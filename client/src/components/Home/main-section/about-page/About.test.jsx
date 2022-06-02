import React from 'react';
import About from './About.jsx';
import { render, screen } from '@testing-library/react';
import 'regenerator-runtime/runtime';

test('About page renders correctly', async () => {
   render(<About />);
   expect(screen.getByTestId('about-container')).toBeDefined();
});
