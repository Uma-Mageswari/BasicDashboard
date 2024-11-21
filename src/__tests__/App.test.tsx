import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";
import { authReducer, initialState } from "../reducers/authReducer";

// Mock components for testing
jest.mock("./components/Header", () => ({
  Header: () => <div>Header</div>,
}));

jest.mock("./components/Dashboard", () => ({
  Dashboard: () => <div>Dashboard</div>,
}));

jest.mock("./components/Footer", () => ({
  Footer: () => <div>Footer</div>,
}));

jest.mock("./components/Login", () => ({
  Login: ({ onLogin, error }: { onLogin: Function; error: string }) => (
    <div>
      <button onClick={() => onLogin("admin", "password")}>Login</button>
      {error && <div>{error}</div>}
    </div>
  ),
}));

describe("App Component", () => {
  it("should render Login component if user is not logged in", () => {
    // Initial state: user is not logged in
    render(<App />);

    // Check if the Login button is present
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it("should render Header, Dashboard, Footer, and Logout button if user is logged in", () => {
    // Set up a mock state where user is logged in
    const mockState = { isLoggedIn: true, error: "" };

    // Mock the useReducer hook to return the mock state
    jest.spyOn(React, "useReducer").mockReturnValue([mockState, jest.fn()]);

    render(<App />);

    // Check if Header, Dashboard, Footer, and Logout button are rendered
    expect(screen.getByText(/header/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it("should handle login and render the logged-in view", () => {
    render(<App />);

    // Simulate login by clicking the Login button
    fireEvent.click(screen.getByText(/login/i));

    // Check if the Header, Dashboard, and Footer components are now rendered
    expect(screen.getByText(/header/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });

  it("should handle logout and render the login view", () => {
    // Set up mock state for a logged-in user
    const mockState = { isLoggedIn: true, error: "" };

    // Mock the useReducer hook to return the logged-in state
    jest.spyOn(React, "useReducer").mockReturnValue([mockState, jest.fn()]);

    render(<App />);

    // Simulate logout by clicking the Logout button
    fireEvent.click(screen.getByText(/logout/i));

    // Check if the Login button is rendered after logout
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});
