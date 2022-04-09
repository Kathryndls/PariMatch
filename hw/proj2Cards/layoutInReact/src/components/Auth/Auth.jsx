import React from 'react';
import "./index.css";


const Auth = () => {
    return (
        <form class='form-wrapper'>
        <label>
            <div class="form-text">Email or name</div>
            <input class="form-input" name="name"type="text"/>
        </label>
        <label>
            <div class="form-text">Password</div>
            <input class="form-input" type="email" name="email" />
        </label>
        <button class="form__btn">Login</button>
    </form> 
    );
};
export default Auth;