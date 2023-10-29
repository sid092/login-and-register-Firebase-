import React, { useState } from "react"
import "./Register.css"
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [reEnterPassword, setreEnterPassword] = useState("")
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                alert("please Enter the details correctly")
            });


    }
    
    function signIn(e) {
        navigate('/')
    }

    return (
        <>
            <div className="container">
                <div className="register">
                    <h1>Register</h1>
                    <input type="text" placeholder="Enter Your Name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Enter Your Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter Your Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Re-enter Password" name='reEnterPassword' value={reEnterPassword} onChange={(e) => setreEnterPassword(e.target.value)} />
                    <div className="button" onClick={handleSubmit}>Register</div>
                    <div>or</div>
                    <div className="button" onClick={signIn}>Login</div>
                </div>
            </div>
        </>
    )
}

export default Register