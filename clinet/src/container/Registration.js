/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Header from '../component/Header';
import useFetch from 'use-http'
var CryptoJS = require("crypto-js");



function Registration() {
    const [uploadedfiles, setUploadedfiles] = useState([])
    


      
    const{get, post, response, loading, error } = useFetch('http://localhost:3000')

    useEffect(async() => {
      const sign_in_btn = document.querySelector("#sign-in-btn");
      const sign_up_btn = document.querySelector("#sign-up-btn");
      const container = document.querySelector(".container");
      
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });
      
      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
      
      
    }, [])

//-----------------------------------------  Login From  ---------------------------------------
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

//---------------------------------------    Login From  ---------------------------------------


//-----------------------------------------  SignUp From End ---------------------------------------
    const [signupFirstName, setSignupFirstName,] = useState('')
    const [signupSureName, setSignupSureName] = useState('')
    const [signupUsername, setSignupUsername] = useState('')
    const [signupEmail, setSignupEmail] = useState('')
    const [signupPassword, setSignupPassword] = useState('')
    const [signupBirthdate, setSignupBirthdate] = useState('')

//---------------------------------------    SignUp From End ---------------------------------------

//---------------------------------------       AES encrypt Start            ---------------------------------------

      var signSecretKey = signupFirstName+"دونت تراي تو هاك مي"+signupSureName+signupBirthdate
      var signupUsernameEncryptedData = CryptoJS.AES.encrypt(JSON.stringify(signupUsername), signSecretKey).toString();
      var signupPasswordEncryptedData = CryptoJS.AES.encrypt(JSON.stringify(signupPassword), signSecretKey).toString();
      var signupFirstNameEncryptedData = CryptoJS.AES.encrypt(JSON.stringify(signupFirstName), signSecretKey).toString();
      var signupSureNameEncryptedData = CryptoJS.AES.encrypt(JSON.stringify(signupSureName), signSecretKey).toString();
      var signupEmailEncryptedData = CryptoJS.AES.encrypt(JSON.stringify(signupEmail), signSecretKey).toString();

      

//---------------------------------------       AES encrypt END            -----------------------



//---------------------------------------       AES decryptedData Start    ----------------------- 

      var bytes = CryptoJS.AES.decrypt(signupUsernameEncryptedData, signSecretKey);
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));


//---------------------------------------       AES decryptedData End      -----------------------
  return (
    
    <div className="Registration-conatiner">


        <Header />
        <div class="container">
      <div class="forms-container">
      <div class="signin-signup">

{/*------------------------------------------  Login From Start ------------------------------------------*/} 
        
        
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" onChange={(e)=>{setLoginUsername(e.target.value)}} required/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e)=>{ setLoginPassword(e.target.value)}} required/>
            </div>
            <input type="submit" value="Login" class="btn solid" 
                  onClick={async()=>{

                if(loginUsername !== "" && loginPassword !== ""){

                  const login = await post('/members/Registration',{

                   loginUsername,
                   loginPassword

              })
              console.log(login)

                  }}
                }
            />
            </form>
{/*------------------------------------------  Login From End ------------------------------------------*/}     


{/*------------------------------------------  SignUp From Start ------------------------------------------*/}           
          
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="First Name" onChange={(e)=>{ setSignupFirstName(e.target.value)}} required />
            </div>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Sure Name" onChange={(e)=>{ setSignupSureName(e.target.value)}} required />
            </div>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" onChange={(e)=>{ setSignupUsername(e.target.value)}} required />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" onChange={(e)=>{ setSignupEmail(e.target.value)}} required />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e)=>{ setSignupPassword(e.target.value)}} required />
            </div>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="Date" style={{ color : "#AAAAAA" }} onChange={(e)=>{ setSignupBirthdate(e.target.value)}} placeholder="Birth Date" required />
            </div>
            <input type="submit" class="btn" value="Sign up" 
            
            onClick={async()=>{

              if(signupUsername !== "" && signupPassword !== "" && signupFirstName !== "" && signupSureName !== "" &&
                signupBirthdate !== "" && signupEmail !== ""
                ){

                  const registration = await post('/members',{

                    userName:  signupUsernameEncryptedData,
                    psasword:  signupPasswordEncryptedData,
                    firstName: signupFirstNameEncryptedData,
                    sureName:  signupSureNameEncryptedData,
                    birthDate: signupBirthdate,
                    email:     signupEmailEncryptedData,

              })

             
            }

              

            }}
            />
          </form>

{/*------------------------------------------  SignUp From End ------------------------------------------*/}

        </div>

      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>
        </div>

    
    </div>
        
       
      
  );
  
}


  




export default Registration;
