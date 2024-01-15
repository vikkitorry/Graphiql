import { expect, vi, test, describe, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from '@testing-library/react';
import { AppRoutes } from '../routes/routeConfig/routeConfig';

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders not found page', async () => {
    await act(async () =>
      render(
        <MemoryRouter initialEntries={['/test']}>
          <App />
        </MemoryRouter>
      )
    );

    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
