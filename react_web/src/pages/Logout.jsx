
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // ✅ Check status

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login status
    navigate('/'); // Redirect to home
  };

  // If not logged in, hide the button
  if (!isLoggedIn) {
    return null;
  }

  return (
    <button onClick={handleLogout} style={{ marginBottom: "20px" }}>
      🔓 Logout
    </button>
  );
}

export default Logout;


