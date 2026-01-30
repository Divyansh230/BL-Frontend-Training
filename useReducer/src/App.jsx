import React, { useReducer } from 'react'

const initialState = {
  email: "",
  password: "",
  loading: false,
  error: "",
  isLoggedIn: false,
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'LOGIN_START':
      return { ...state, loading: true, error: "" };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, isLoggedIn: true, email: '', password: '' };
    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: "Invalid credentials", password: "" };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { email, password, loading, error, isLoggedIn } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Hardcoded credentials for demonstration
          if (email === 'user@example.com' && password === 'password') {
            resolve();
          } else {
            reject();
          }
        }, 1000);
      });
      dispatch({ type: 'LOGIN_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'LOGIN_ERROR' });
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <h1>Welcome!</h1>
          <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) =>
                dispatch({ type: 'SET_EMAIL', payload: e.target.value })
              }
              placeholder="user@example.com"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) =>
                dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
              }
              placeholder="password"
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      )}
    </div>
  );
};

export default App
