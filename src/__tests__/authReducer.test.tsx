// src/__tests__/authReducer.test.ts
import { authReducer, initialState } from "../reducers/authReducer"; // Adjust the import path as necessary
import { AuthAction } from "../reducers/authReducer"; // Import the AuthAction type

describe("authReducer", () => {
  it("should handle login with correct credentials", () => {
    const action: AuthAction = {
      type: "login", // Explicitly use the correct type here
      username: "admin",
      password: "password",
    };
    const result = authReducer(initialState, action);

    // After login, isLoggedIn should be true, and error should be an empty string
    expect(result).toEqual({
      isLoggedIn: true,
      error: "",
    });
  });

  it("should handle login with incorrect credentials", () => {
    const action: AuthAction = {
      type: "login", // Explicitly use the correct type here
      username: "wronguser",
      password: "wrongpassword",
    };
    const result = authReducer(initialState, action);

    // After failed login, isLoggedIn should remain false, and error should be set
    expect(result).toEqual({
      isLoggedIn: false,
      error: "Invalid username or password.",
    });
  });

  it("should handle logout", () => {
    const loggedInState = {
      isLoggedIn: true,
      error: "",
    };
    const action: AuthAction = { type: "logout" }; // Use the correct type
    const result = authReducer(loggedInState, action);

    // After logout, isLoggedIn should be false, and error should be cleared
    expect(result).toEqual({
      isLoggedIn: false,
      error: "",
    });
  });

  it("should handle setting error", () => {
    const action: AuthAction = {
      type: "setError",
      error: "Some error occurred",
    };
    const result = authReducer(initialState, action);

    // After setting error, the error message should be updated
    expect(result).toEqual({
      isLoggedIn: false,
      error: "Some error occurred",
    });
  });
});
