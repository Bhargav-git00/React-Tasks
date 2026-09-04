import React, { useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [name,setName] = useState("")
    const [email,SetEmail] = useState("")
    const [pass,setPass] = useState("")
    const [cpass,setcPass] = useState("")

    let navigate = useNavigate()

    const handleSubmit =(e)=>{

        e.preventDefault()

        const user_data ={
            name:name,
            email:email,
            pass:pass,
            cpass:cpass
        }


        if(pass == cpass){
          localStorage.setItem("users",JSON.stringify(user_data));
          alert("registered Successfully") 
          setName("")
          SetEmail("")
          setPass("")
          setcPass("")  
          
          navigate("./login")
        }
        else{
          alert("password and confirm password must be same")
        }
        
    }
    

  return (
    <div className="register-container">
      <form className="register-form">

        <h2>Register</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>SetEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Confirm Password"
          value={cpass}
          onChange={(e)=>setcPass(e.target.value)}
        />

        <input
          type="submit"
          value="Register"
          onClick={handleSubmit}
        />

      </form>

    </div>
  )
}

export default Register