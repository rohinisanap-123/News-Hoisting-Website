import React, { useState } from 'react'
import Admin from './Admin';
import Logout from './Logout';

function Login() {

  const [text , setText] = useState("")
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const correctPassword = "1111";
  const correctUsername = "Rohini@" 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword && text === correctUsername) {
      setIsLoggedIn(true);
     
    } else {
      alert("Incorrect  username or password !");
    }
  };
  if (isLoggedIn) {
    return <Admin/>;
  } 

  return (
   <div className='admin'>
     <div className="admin-login">
      <h2>🔐 Admin Login</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Username' value={text} onChange={(e) => setText(e.target.value)}/> <br/>
        <input type="password" placeholder="Enter admin password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>

        <button type="submit">Login</button>
      </form>
    </div>
   </div>
  );  
}
export default Login;







// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   function handleSubmit(e) {
//     e.preventDefault();
//     // Simple mock auth check
//     if (username === "admin" && password === "1234") {
//       onLogin();
//       navigate("/admin");
//     } else {
//       setError("Invalid username or password");
//     }
//   }

//   return (
//     <div style={{ padding: "10px" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }
