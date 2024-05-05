import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero.jsx";
import HeroCard from "../components/HeroCard/HeroCard.jsx";
import BgVideo from "../assets/earth-bg.mp4";
import '../App.css';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="">
    <div className="h-[700px] relative">
      <video
        autoPlay
        loop
        muted
        className="fixed right-0 top-0 h-[800px] w-full object-cover z-[-1]"
      >
        <source src={BgVideo} type="video/mp4" />
      </video>
  
    
  <form className="login mt-50" onSubmit={handleSubmit}>
    <h3>Log In</h3>
    
    <label>Email address:</label>
    <input 
      type="email" 
      onChange={(e) => setEmail(e.target.value)} 
      value={email} 
    />
    <label>Password:</label>
    <input 
      type="password" 
      onChange={(e) => setPassword(e.target.value)} 
      value={password} 
    />

    <button className=" text-black border-2 border-black px-3 py-1 rounded-md" disabled={isLoading}>Log in</button>
    {error && <div className="error">{error}</div>}
  </form>
    </div>


    </div>
  )
}

export default Login