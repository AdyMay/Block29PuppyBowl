import React, { useState } from "react";
import axios from "axios";

function Login({ setToken }) {
    const [formData, setFormData] = useState({});

    const handleInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
        axios
            .post(`https://fsa-jwt-practice.herokuapp.com/signup`, formData)
            .then((responce) => {
                console.log(responce);
            if(responce.data.success) {
                console.log(responce.data.token);
                setToken(responce.data.token);
            }
        })
        .catch((err) => console.log(err));
            } catch (err) {
        console.log(err);
        }
    };

  return (
    <div>
        <h1> Login to PuppyBowl </h1>
        <link to="/"
        <form>
            <label>
                Username: 
                <input type="text" name="username" onChange={handleInput} />
            </label>
            <label>
                Password: 
                <input type="password" name="password" onChange={handleInput} />
            </label>
            <button>Submit</button>
        </form>
  </div>
  );
}

export default Login;
