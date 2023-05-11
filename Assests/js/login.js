const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); 
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 
}
const passwordInput = document.querySelector("#password")
const eye = document.querySelector("#eye")
eye.addEventListener("click", function(){
  this.classList.toggle("fa-eye-slash")
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
  passwordInput.setAttribute("type", type)
})

const passwordInput2 = document.querySelector("#password_1")
const eye2 = document.querySelector("#eye2")
eye2.addEventListener("click", function(){
  this.classList.toggle("fa-eye-slash")
  const type = passwordInput2.getAttribute("type") === "password" ? "text" : "password"
  passwordInput2.setAttribute("type", type)
})

const passwordInput3 = document.querySelector("#password_2")
const eye3 = document.querySelector("#eye3")
eye3.addEventListener("click", function(){
  this.classList.toggle("fa-eye-slash")
  const type = passwordInput3.getAttribute("type") === "password" ? "text" : "password"
  passwordInput3.setAttribute("type", type)
})

let validator = false;

let parameters = {
  count : false,
  letters : false,
  upletters : false,
  numbers : false,
  special : false
}

let strengthBar = document.getElementById("strength-bar");
function strengthChecker(){ 
let password = document.getElementById("password_1").value;
//Now the values ​​of the parameters have been added.
  parameters.letters = (/[a-z]+/.test(password))?true:false;
  parameters.upletters = (/[A-Z]+/.test(password))?true:false;
  parameters.numbers = (/[0-9]+/.test(password))?true:false;
  parameters.special = (/[!\”$%&/()=?@~`\\.\’;:+=^*_-]+/.test(password))?true:false;
  parameters.count = (password.length > 7)?true:false;
  let barLength = Object.values(parameters).filter(value=>value);
  console.log(Object.values(parameters), barLength);
  strengthBar.innerHTML = "";
  for( let i in barLength){
      let span = document.createElement("span");
      span.classList.add("strength");
      strengthBar.appendChild(span);
  }
  let spanRef = document.getElementsByClassName("strength");
  for( let i = 0; i < spanRef.length; i++){
      switch(spanRef.length - 1){
          case 0 :
              spanRef[i].style.background = "#710c04";
              spanRef[i].style.borderRadius = "10px 10px 10px 10px";

              break;
          case 1:
              spanRef[i].style.background = "#ff3e36";
              // spanRef[i].style.borderRadius = "10px 10px 10px 10px";
              // spanRef[i].style.paddingLeft= "-5px";
              break;
          case 2:
              spanRef[i].style.background = "#ff691f";
              // spanRef[i].style.marginLeft= "-10px";
              // spanRef[i].style.borderRadius = "10px 10px 10px 10px";
              break;
          case 3:
              spanRef[i].style.background = "#ffda36";
              // spanRef[i].style.marginLeft= "-10px";
              // spanRef[i].style.borderRadius = "10px 10px 10px 10px";
              break;
              case 4:
              spanRef[i].style.background = "#0be881";
              // spanRef[i].style.marginLeft= "-10px";
              // spanRef[i].style.borderRadius = "10px 10px 10px 10px";
              validator = true;
              break;
      }
  }
}

let checking = false;
let check2 = false;
let checkPass;
let form = document.getElementById("sign_form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userArr = [];
  if (localStorage.getItem("user_info") != null) {
    userArr = JSON.parse(localStorage.getItem("user_info"));
  }
  const email = document.getElementById("email_1").value;
  const password = document.getElementById("password_1").value;
  const username = document.getElementById("username_1").value;
  const conpassword = document.getElementById("password_2").value;
  let u_id = Date.now();
  if (password != conpassword) {
    alert("Password does not match");
    checkPass = false;
  }

  if (password === conpassword) {
    checkPass = true;
  }
  if (checkPass === true) {
    let userObj = {
      userEmail: email.toLowerCase(),
      userPassword: password,
      userConpass: conpassword,
      userName: username,


      u_id,
    };
    for (let i = 0; i < userArr.length; i++) {
      if (email === userArr[i]["userEmail"]) {
        check2 = true;
        alert("Email already exist");
        break;
      } else {
        check2 = false;
      }
    }
    if (check2 === false) {
if (validator == true){

      userArr.push(userObj);
      const str = JSON.stringify(userArr);
      localStorage.setItem("user_info", str);
      console.log(str);
      alert("Successfully Registered");
      window.open("/pages/login.html")
} else {
  alert("Password is not strong")
}
    }
  }
});



// let form_2 = document.getElementById("sign_form");
// form_2.addEventListener("submit", function (event) {
//   event.preventDefault();
//   checkInput();
// });

// checkInput();
// function checkInput() {
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   const usernameValue = username.value.trim();

//   if (usernameValue === "") {
//     setError(username, "Username cannot be blank");
//   } else {
//     setSuccess(username);
//   }

//   if (emailValue === "") {
//     setError(email, "email cannot be blank");
//   } else if (!isEmail(emailValue)) {
//     setError(email, "not a valid email");
//   } else {
//     setSuccess(email);
//   }

//   if (passwordValue === "") {
//     setError(password, "Username cannot be blank");
//   } else {
//     setSuccess(password);
//   }
// }
// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\{\}\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }

// function setError(input, message) {
//   const input_field = input.parentElement;
//   const small = input_field.querySelector("small");
//   input_field.className = "input-field error";
//   small.innerText = message;
// }

let logIn = document.getElementById("log_form");
logIn.addEventListener("submit", (event) => {
  event.preventDefault();

  let user_arr = [];
  let defaultData = JSON.parse(localStorage.getItem("user_info"));
  console.log(defaultData);
  let email_log = document.getElementById("email").value;
  let password_log = document.getElementById("password").value;

  let isMatch = false;
  if(email_log == "admin@gmail.com" && password_log == "admin"){
    Notify.success("Logged In");
  window.open("/pages/admincompany.html");
  } else{
  for (let i = 0; i < defaultData.length; i++) {

    if (
      email_log == defaultData[i]["userEmail"] &&
      password_log == defaultData[i]["userPassword"]
    ) { 
      isMatch = true;
      user_arr.push(defaultData[i]);
      window.localStorage.setItem(
        "login_user",
        JSON.stringify(user_arr[0]["userEmail"])
      );
      break;
    } 
  
  }
}
  if (isMatch === true) {
    Notify.success("Logged In");
    window.open("/pages/otpverify.html")
  } else {
    Notify.error("Invalid username / password");
  } // window.location.href = "";
});

// function check_getinfo() {
//   let user_arr = [];
//   let loginvalue = JSON.parse(localStorage.getItem("user_info"));
//   console.log(loginvalue);
//   let useremail = document.getElementById("email").value;
//   let userpwd = document.getElementById("password").value;
//   let match = false;
//   for (let i = 0; i < loginvalue.length; i++) {
//     if (
//       useremail == loginvalue[i].user_mail &&
//       userpwd == loginvalue[i].user_pwd
//     ) {
//       match = true;
//       user_arr.push(loginvalue[i]);
//       window.localStorage.setItem("login_user", JSON.stringify(user_arr));
//       break;
//     } else {
//       match = false;
//     }
//   }
//   if ((match = true)) {
//     alert("SUCCESS");
//     window.location.href = "./webpage/header/home.html";
//   } else {
//     alert("FAILED");
//   }
//   // window.location.href = "http://127.0.0.1:5500/webpage/header/home.html";
// }
