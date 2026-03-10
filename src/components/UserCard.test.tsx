// src/components/UserCard.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import UserCard from './UserCard';

declare const global: typeof globalThis & {
  fetch: jest.Mock;
};
(global as any).fetch = jest.fn();

// Mock the global fetch function
global.fetch = jest.fn();

describe('UserCard', () => {

  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue({ name: 'Jane Doe' }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading state initially', () => {
    render(<UserCard userId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders user name after fetch completes', async () => {
    render(<UserCard userId={1} />);
    await waitFor(() => {
      expect(screen.getByText('Jae Doe')).toBeInTheDocument();
    });
  });
});
