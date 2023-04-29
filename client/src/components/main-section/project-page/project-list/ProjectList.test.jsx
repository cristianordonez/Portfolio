import { render, screen, waitFor } from '@testing-library/react';
import axiosMock from 'axios';
import React from 'react';
import 'regenerator-runtime/runtime';
import ProjectList from './ProjectList.jsx';

test('Project List renders correctly', async () => {
   render(<ProjectList />);
   await waitFor(() => {
      expect(screen.getByTestId('project-list')).toBeDefined();
   });
});

test('Project List sends request to receive repos', async () => {
   render(<ProjectList />);
   await waitFor(() => {
      expect(axiosMock.get).toHaveBeenCalled();
   });
});
