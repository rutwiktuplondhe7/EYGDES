import React, { useState } from 'react'
import axios  from 'axios'

export default function InputForm({setIsOpen}) {
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
    const[isSignUp,setSignUp]=useState(false);
    const [error,setError]=useState("");
 

    const handleSubmit = async (e) => {
        e.preventDefault();
        let endpoint = isSignUp ? "signUp" : "login";
        try {
            const res = await axios.post(`http://localhost:5000/${endpoint}`, { email, password });
            console.log("Response:", res.data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setIsOpen();
        } catch (error) {
            console.error("Error Response:", error.response?.data);
            setError(error.response?.data?.error || "Something went wrong");
        }
    };
    
  return (
    <>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>
                    Email : 
                </label>
                <input type='email' className='input'
                required onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>
                    Password : 
                </label>
                <input type='password' className='input'
                required onChange={(e)=>setPass(e.target.value)}/>
            </div>
            <button type='submit'>
                { (isSignUp) ?"Sign Up" : "Login"}
            </button><br></br>
            {(error!="") && <h6 className='error'>
                {error}
            </h6>}
            <p onClick={()=>setSignUp(pre=>!pre)}>
                {(isSignUp) ? "Already have an Account ? ": " Don't have an Account?"}
            </p>
        </form>      
    </>
  )
}
