// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       alert(response.data.message);
//       localStorage.setItem('token', response.data.token); // Store token in localStorage

//       navigate('/homepage'); // Redirect to HomePage.jsx
//     } catch (error) {
//       setError(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Welcome to <span className="highlight">NARIVITT</span></h2>
//         <p className="tagline">Empowering Women, Transforming Lives</p>
//         {error && <p className="error-message">{error}</p>}
        
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Email:</label>
//             <input 
//               type="email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//           </div>
          
//           <div className="input-group">
//             <label>Password:</label>
//             <input 
//               type="password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//           </div>

//           <button type="submit" className="login-button">Login</button>
//         </form>

//         <p className="signup-text">
//           Don't have an account? <span onClick={() => navigate('/signup')} className="signup-link">Sign up</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/login', { email, password });
      alert(response.data.message);
      localStorage.setItem('token', response.data.token); // Store token in localStorage

      navigate('/homepage'); // Redirect to HomePage.jsx
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to <span className="highlight">NARIVITT</span></h2>
        <p className="tagline">Empowering Women, Transforming Lives</p>
        {error && <p className="error-message">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          
          <div className="input-group">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account? <span onClick={() => navigate('/signup')} className="signup-link">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
