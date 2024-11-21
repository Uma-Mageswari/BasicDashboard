// src/__tests__/Header.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components//Header"; // Adjust the import path as necessary
import '@testing-library/jest-dom'; // For the `toBeInTheDocument` matcher

describe('Header Component', () => {
  it('renders the AppBar', () => {
    render(<Header />);
    
    // Check if the AppBar is rendered by looking for its children
    const appBar = screen.getByRole('banner');
    expect(appBar).toBeInTheDocument();
  });

  it('displays the Sample Dashboard text', () => {
    render(<Header />);
    
    // Check if the text "Sample Dashboard" is rendered
    const dashboardText = screen.getByText(/Sample Dashboard/i);
    expect(dashboardText).toBeInTheDocument();
  });

  it('renders the MenuIcon button', () => {
    render(<Header />);
    
    // Check if the MenuIcon is rendered
    const menuButton = screen.getByLabelText('menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('renders the LogoutIcon button', () => {
    render(<Header />);
    
    // Check if the LogoutIcon is rendered
    const logoutButton = screen.getByLabelText('LogoutIcon');
    expect(logoutButton).toBeInTheDocument();
  });
});
