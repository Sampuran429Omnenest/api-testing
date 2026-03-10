// src/components/Greeting.test.tsx
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {

  it('renders the greeting with name', () => {
    render(<Greeting name='Alice' />);
    // screen.getByText looks for visible text in the DOM
    expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
  });

  it('renders age when provided', () => {
    render(<Greeting name='Bob' age={30} />);
    expect(screen.getByText('You are 30 years old.')).toBeInTheDocument();
  });

  it('does not render age when not provided', () => {
    render(<Greeting name='Carol' />);
    expect(screen.queryByText(/years old/)).not.toBeInTheDocument();
  });
});
