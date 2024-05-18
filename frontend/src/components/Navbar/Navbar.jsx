import React from "react";
import Logo from "../../assets/logo.png";
import Apod from "../../pages/apod";
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }


  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="" className="w-10" />
              <Link to="/"><span>INFINITY-SPACE</span></Link>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/apod">APOD</Link>
                </li>
                <li>
                <Link to="/neow">NEOs</Link>
                </li>
             
                <li>
                <Link to="/library">Library</Link>
                </li>
                {user && (
                <li>
                <Link to="/events">My Gallery</Link>
                </li>
                )}

              </ul>
            </div>
            <div>
             
              {user && (
            <div>
              <span className=" text-white" >{user.email}</span>
              <button  className=" text-black border-2 border-white px-3 py-1 rounded-md"onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link className=" text-white border-2 border-white px-3 py-1 rounded-md"  to="/login">Login</Link>
              <Link  className=" text-white border-2 border-white px-3 py-1 rounded-md" to="/signup">Signup</Link>
            </div>
          )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
