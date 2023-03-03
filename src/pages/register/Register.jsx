import React from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>DEVWEB</h1>
          <p>
            lorum ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            nisl id urna tincidunt tincidunt. Sed euismod, nisl vel tincidunt
          </p>
          <p className="span-text">Already have account?</p>
          <Link to="/signin">
            <button>SignIn</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
