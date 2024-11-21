// src/__tests__/Login.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login"; // Adjust the import path as necessary
import '@testing-library/jest-dom'; // For the `toBeInTheDocument` matcher

describe("Login Component", () => {
  const mockOnLogin = jest.fn();

  beforeEach(() => {
    // Clear mock function calls before each test
    mockOnLogin.mockClear();
  });

  it("renders the Login form", () => {
    render(<Login onLogin={mockOnLogin} error="" />);
    
    // Check if the username and password fields are rendered
    const usernameField = screen.getByLabelText(/Username/i);
    const passwordField = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("calls onLogin with username and password when form is submitted", () => {
    render(<Login onLogin={mockOnLogin} error="" />);
    
    // Find the input fields and the submit button
    const usernameField = screen.getByLabelText(/Username/i);
    const passwordField = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });
    
    // Simulate typing in the input fields
    fireEvent.change(usernameField, { target: { value: "testuser" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });

    // Simulate form submission
    fireEvent.click(loginButton);
    
    // Assert that the mock function was called with the correct arguments
    expect(mockOnLogin).toHaveBeenCalledWith("testuser", "password123");
  });

  it("displays an error message when error prop is provided", () => {
    render(<Login onLogin={mockOnLogin} error="Invalid credentials" />);
    
    // Check if the error message is displayed
    const errorMessage = screen.getByText(/Invalid credentials/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("does not display an error message when there is no error", () => {
    render(<Login onLogin={mockOnLogin} error="" />);
    
    // Check that the error message is not in the document
    const errorMessage = screen.queryByText(/Invalid credentials/i);
    expect(errorMessage).not.toBeInTheDocument();
  });
});
