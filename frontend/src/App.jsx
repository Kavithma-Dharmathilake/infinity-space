import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'



//pages
import Home from "./pages/Home.jsx";
import Apod from "./pages/apod.jsx";
import Neow from "./pages/Neow.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Events from "./pages/Events.jsx";
import Library from "./pages/Library.jsx";

const App = () => {

  const { user } = useAuthContext()
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/neow" element={<Neow />} />
        <Route path="/events" element={<Events />} />
        <Route path="/library" element={<Library />} />
        <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
