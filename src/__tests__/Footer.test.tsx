import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'; // Adjust the import path as necessary
import { colors } from '../theme/colors'; // Ensure the colors import is correct

// Mocking Material-UI's Container component as needed (optional)
jest.mock('@mui/material/Container', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
});

describe('Footer', () => {
  it('should render the footer with the correct text', () => {
    render(<Footer />);

    // Check if the footer text is rendered
    const footerText = screen.getByText(/© 2024 My Website\. All rights reserved\./i);
    expect(footerText).toBeInTheDocument();
  });

  it('should have correct styles', () => {
    render(<Footer />);

    // Check if the footer has the expected background color
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveStyle(`background-color: ${colors.background}`);
    expect(footerElement).toHaveStyle('position: fixed');
    expect(footerElement).toHaveStyle('bottom: 0');
    expect(footerElement).toHaveStyle('width: 100%');
    expect(footerElement).toHaveStyle('color: white');
  });
});
