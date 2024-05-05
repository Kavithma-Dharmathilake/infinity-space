import { useState } from "react"

import { useSignup } from "../hooks/useSignup"
import BgVideo from "../assets/earth-bg.mp4";
import '../App.css';

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
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
  <form className="signup" onSubmit={handleSubmit}>
    <h3>Sign Up</h3>
    
    <label>Email address:</label>
    <input 
    className=" text-black border-2 border-black px-3 py-1 rounded-md"
      type="email" 
      onChange={(e) => setEmail(e.target.value)} 
      value={email} 
    />
    <label>Password:</label>
    <input 
    className=" text-black border-2 border-black px-3 py-1 rounded-md"
      type="password" 
      onChange={(e) => setPassword(e.target.value)} 
      value={password} 
    />

    <button className=" text-black border-2 border-black px-3 py-1 rounded-md"  disabled={isLoading}>Sign up</button>
    {error && <div className="error">{error}</div>}
  </form>
    </div>
  
  </div>
  )
}

export default Signup