type AuthState = {
  isLoggedIn: boolean;
  error: string;
};

export type AuthAction =
  | { type: "login"; username: string; password: string }
  | { type: "logout" }
  | { type: "setError"; error: string };

const initialState: AuthState = {
  isLoggedIn: false,
  error: "",
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "login":
      if (action.username === "admin" && action.password === "password") {
        return { ...state, isLoggedIn: true, error: "" };
      } else {
        return { ...state, error: "Invalid username or password." };
      }
    case "logout":
      return { ...state, isLoggedIn: false, error: "" };
    case "setError":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export { authReducer, initialState };
