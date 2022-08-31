import React from "react";
import "./Form.css";
import image from "./goab.png";
import {FaFacebook} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"


const Form = () => {
       return (

<div className="login-form">
<div className="main-handle">
  <nav>
    <ul>

      <li>
        <h1 className="eddie-title">EddieShop</h1>
      </li>
      <li className="text"> <p>Dont have an account? <span className="up"> Sign up</span></p> </li>
    </ul>
  </nav>
<p className="wel-text">Welcome Back</p>
   <form className="wel-form">
   <p className="login"> Your Email</p>
   <input type="text" className="input" name="username" id="useremail" placeholder="name@domain.com" />
   <p className="login"> Password</p>
  <input type="password" name="username" className="input" id="userpassword" placeholder="at least 8 characters"/> <br/>
  <input type="checkbox" className="checkbox"/>
  <p className="log">Keep me logged in <span className="reset"> Forgot password?</span></p>
<button className="btn-log">Login</button>
</form>
<p>
</p>
<p className="text-center ">__________________________<span>or</span> ________________________</p>
<div className="icons">
  <div className="face">
  <FaFacebook/>
  </div>
  <div className="goo">
  <FaGoogle/>
  </div>
  <div className="inst">
  <FaInstagram/>
  </div>
</div>
<div className="image">
<img src= {image} alt="image" />
</div>
</div>

  </div>
);
};


export default Form;