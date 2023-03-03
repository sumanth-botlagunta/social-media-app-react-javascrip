import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>DEVWEB</h1>
          <p>
            lorum ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            nisl id urna tincidunt tincidunt. Sed euismod, nisl vel tincidunt
          </p>
          <p className="span-text">Don't have account?</p>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Sign In</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
