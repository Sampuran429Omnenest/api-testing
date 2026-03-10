import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

// Setup Mocking for global fetch
declare const global: typeof globalThis & {
  fetch: jest.Mock;
};

(global as any).fetch = jest.fn();

describe('UserCard', () => {
  beforeEach(() => {
    // Reset and define the mock behavior before each test
    global.fetch.mockResolvedValue({
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

    // findByText replaces waitFor + getByText
    // It waits up to 1000ms and wraps the check in act()
    const nameElement = await screen.findByText('Jane Doe');
    
    expect(nameElement).toBeInTheDocument();
  });
});