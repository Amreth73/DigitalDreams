import React from 'react';
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "./LLogin.css";
import "./bgimg.json"
import {ggg} from "./ansss.json"


export const LLogin = () => {
  return (
    <>
        <div id="anii">
          <img src='bgimg.json' alt='no img'></img>
        </div>
      <div id="whole">
              <h1 id='title'>SignIn Page</h1>
        <div id="ele">
          <div id="name-1">
            <FaUserLarge id="usericon" />
            <input type='text' id="email" className="ip" placeholder='Enter the UserName'/>
          </div>
          <div id="email-1">

           <input type='text' id="email" className="ip" placeholder='Enter the Email'/>
           <MdEmail id="emailicon"/>
          </div>
          <div id="pass-1">
              <input type="password" id="pass" className="ip" placeholder='Enter the  Password' />
              <FaLock id="lockicon"/>
          </div>
          <div id="pass-2">
            <input type="password" id="pass" className="ip" placeholder='Enter the Confirm Password' />
              <FaLock id="lockicon2"/>
          </div>
          <div id="btns">
            <button id="signBtn">SignIn</button>
            <button id="CreateBtn">Create Account</button>
          </div>
        </div>
      </div>
    </>
  );
};
