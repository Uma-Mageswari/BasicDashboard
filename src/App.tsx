import React, { useReducer } from "react";
import { Dashboard, Footer, Header, Login } from "./components";
import { authReducer, initialState } from "./reducers/authReducer";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const handleLogin = (username: string, password: string) => {
    dispatch({ type: "login", username, password });
  };
  
  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div id="app-container">
      {!state.isLoggedIn ? (
        <Login onLogin={handleLogin} error={state.error} />
      ) : (
        <div
          id="app"
          style={{
            position: "relative",
          }}
        >
          <Header
            onLogout={handleLogout}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "60px",
              zIndex: 1,
            }}
          />
          <Dashboard
          />
          <Footer
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "36px",
              zIndex: 1,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default App;
