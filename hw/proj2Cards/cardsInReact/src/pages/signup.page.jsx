import React, { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
// import "./Auth/index.css"

const SignupPage = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const handleRegister = async (e) => {
      e.preventDefault();
      try {
         await AuthService.register(username, email, password).then(
         (response) => {
            // check for token and user already exists with 200
            // console.log("Sign up successfully", response);
            navigate("/test");
            window.location.reload();
         },
         (error) => {
            console.log(error);
         }
         );
      } catch (err) {
         console.log(err);
      }
   };
   return (
      <div>
         <form 
         className="form-wrapper"
         onSubmit={handleRegister}
         >
         <h3>Resiter</h3>
         <input
            className="form-input"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
         />
         <input
            className="form-input"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <input
            className="form-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <button 
            className="form__btn"
            type="submit"
         >
            Sign up
         </button>
         </form>
      </div>
   );
};

export default SignupPage;