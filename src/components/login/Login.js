import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate('/homepage');

            })
            .catch((error) => {
                alert("user doesn't exist");
            });
    }
    
    function register(e) {
        navigate('/register');
    }
    return (
        <>
            <div className="container">
                <div className="login">
                    <h1>Login</h1>
                    <input type="text" placeholder="Enter your Email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Enter your password"
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="button" onClick={handleSubmit}>Login</div>
                    <div>or</div>
                    <div className="button" onClick={register}>Register</div>
                </div>
            </div>
        </>
    )
}
export default Login