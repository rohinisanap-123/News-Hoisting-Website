// import React from 'react'
// import Sports from "./pages/Sports"
// import Health from "./pages/Health"
// import Fitness from "./pages/Fitness"
// import Entertainment from "./pages/Entertainment"
// import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import Home from './pages/Home'

// import AppLayout from './components/AppLayout'
// import Login from './pages/Login'
// import Logout from './pages/Logout'
// import Admin from './pages/Admin'

// function App() {

//     const router = createBrowserRouter([

//           {
//       path: "/",          // Parent Route
//       element: <AppLayout />,   // Contains Navbar + Outlet
//       children: [
//         { path: "/", element: <Home /> },
//         { path: "/sports", element: <Sports /> },
//         { path: "/health", element: <Health /> },
//         { path: "/fitness", element: <Fitness /> },
//         { path: "/entertainment", element: <Entertainment /> },
//         { path: "/login" , element : <Login/>},
//         { path : "/logout" , element : <Logout/>},
//         { path: "/admin" , element : <Admin/>}
//       ],
//     },
//   ]);
        
       
        
           
//   return <RouterProvider router={router}/>
// }

// export default App




import React from 'react';
import Sports from "./pages/Sports";
import Health from "./pages/Health";
import Fitness from "./pages/Fitness";
import Entertainment from "./pages/Entertainment";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from './pages/Home';
import AppLayout from './components/AppLayout';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Admin from './pages/Admin';

// Protected Route Component
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Parent Route
      element: <AppLayout />, // Contains Navbar + Outlet
      children: [
        { path: "/", element: <Home /> },
        { path: "/sports", element: <Sports /> },
        { path: "/health", element: <Health /> },
        { path: "/fitness", element: <Fitness /> },
        { path: "/entertainment", element: <Entertainment /> },
        { path: "/login", element: <Login /> },
        { path: "/logout", element: <ProtectedRoute><Logout /></ProtectedRoute> },
        { path: "/admin", element: <ProtectedRoute><Admin /></ProtectedRoute> }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

