import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        
        console.log("Users in Local Storage:", existingUsers);  
        console.log("Entered Email:", email);
        console.log("Entered Password:", password);
        
        const user = existingUsers.find(user => user.email === email && user.password === password);
        
        if (user) {
            console.log("User Found:", user); 
            localStorage.setItem("username", user.username);
            setIsLoggedIn(true);
            alert("Login Successful!");
            navigate("/");
        } else {
            console.log("Login Failed: No matching user found");  
            alert("Invalid Credentials");
        }
    };
    

    return (
        <div className="login-container"> 
            <div className="login-box"> 
                <h2>Login</h2>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
                <p>New user? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};    

export default Login;
