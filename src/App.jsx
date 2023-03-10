import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';

import { Login, Register, Home, Profile } from './pages';
import { Navbar, Leftbar, Rightbar } from './components';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

const App = () => {
  var { userAuth } = React.useContext(AuthContext);

  const { darkMode } = React.useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div className="home-container" style={{ display: 'flex' }}>
          <Leftbar />
          <div style={{ flex: '7' }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!userAuth) {
      return <Navigate to="/signin" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/signin',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
