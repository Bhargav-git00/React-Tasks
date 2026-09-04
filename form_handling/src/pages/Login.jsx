import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

    const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    const user = localStorage.getItem("users");

    if (user) {
        console.log("hello");

        const data = JSON.parse(user);

        console.log("Stored data:", data);
        console.log("Entered email:", email);
        console.log("Entered password:", pass);

        if (data.email === email && data.pass === pass) {
            alert("login successfully");
            navigate("/home");
        } else {
            alert("invalid credentials");
        }
    } else {
        alert("No user Registered");
    }
};


  return (
    <div className="login-container">

      <form className="login-form">

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
        />

        <input
          type="submit"
          value="Login"
          onSubmit={handleLogin}
        />

      </form>

    </div>
  )
}

export default Login