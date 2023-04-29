import React from 'react';
import ProjectList from './ProjectList.jsx';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import axiosMock from 'axios';
import 'regenerator-runtime/runtime';

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
