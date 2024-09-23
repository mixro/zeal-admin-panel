import { Link } from 'react-router-dom'
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../../redux/apiCalls';

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [logginButtonClicked, setLogginButtonClicked] = useState(false); 
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.zealAdmin);

  const handleClick = (e) => {
    e.preventDefault();
    setLogginButtonClicked(true);
    login(dispatch, { email, password});
  }

  return (
    <div className="registerContainer">
      <div className="registerTop">
        <div className="registerTop-image">
          <Link to='/' className='link-main'>
            <img src="/images/zeal-logo.png" alt="LOGO" />
          </Link>
        </div>
      </div>

      <div className="registerBody">
        <div className="registerBody-container">
          <h2>Login</h2>
          <div className="registerItems">
            <div className="registerBody_item">
              <h3>Email</h3>
              <input 
                type="text"
                className='register-input' 
                placeholder='eg; johndoe@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="registerBody_item">
              <h3>Password</h3>
              <input 
                type="password"
                className='register-input' 
                placeholder='Enter password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="registerButton loginButton">
            <button onClick={handleClick}>{logginButtonClicked ? (isFetching && logginButtonClicked ? "LOADING.." : "LOGIN") : "LOGIN"}</button>
          </div>
          {logginButtonClicked && error && // Display error only after button click
            <div className="error">
              <p>Wrong credentials!!, Try again !!</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Login