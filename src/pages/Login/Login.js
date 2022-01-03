import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

import './Login.css';

import signIn from '../../services/firebase/signIn';

const Login = () => {

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });
  
  let navigate = useNavigate();
  let { user } = useContext(UserContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSignIn = e => {
    e.preventDefault();
    const { email, password } = loginFormData;

    signIn(email, password, () => {
      navigate('/');
    }, error => {
      console.log(`Error ${error.code} : ${error.message}`);
      alert('Email ou mot de passe incorrect');
    });
  };

  if (typeof user === 'object') return <Navigate to='/' />;

  return (
    <div className='container login'>
      <div className='login'>
        <div className='form-container'>
          <h1>Login</h1>

          <form onSubmit={handleSignIn}>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                required
                value={loginFormData.email}
                onChange={handleChange} />
            </div>
            <div>
              <label htmlFor='password'>Mot de passe</label>
              <input
                id='password'
                name='password'
                type='password'
                required
                value={loginFormData.password}
                onChange={handleChange} />
            </div>
            <button className='btn btn-primary'>Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
