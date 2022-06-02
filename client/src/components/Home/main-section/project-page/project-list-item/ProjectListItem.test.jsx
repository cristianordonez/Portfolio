import React from 'react';
import ProjectListItem from './ProjectListItem.jsx';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axiosMock from 'axios';
import 'regenerator-runtime/runtime';
import { Description } from '@mui/icons-material';

const repo = {
   key: 'test',
   name: 'diabetes-nutrition-calculator-app',
   image: 'image',
   description: 'description',
   homepageUrl: 'test',
   githubUrl: 'url',
};
test('Project List renders correctly', async () => {
   render(
      <ProjectListItem
         ke
         key={repo.key}
         name={repo.name}
         image={repo.image}
         description={repo.description}
         homepageUrl={repo.homepageUrl}
         githubUrl={repo.githubUrl}
      />
   );
   await waitFor(() => {
      expect(screen.getByTestId('project-list-item')).toBeDefined();
   });
});
