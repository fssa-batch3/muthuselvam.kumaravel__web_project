// const { json } = require("stream/consumers");

 





function sendOtp(){
    let email_id = document.getElementById("email");
    // let otpverify = document.getElementById("otp_1").value+document.getElementById("otp_2").value+document.getElementById("otp_3").value+document.getElementById("otp_4").value;
    
let otp_value = Math.floor(Math.random()*10000);
let set_otp = JSON.stringify(otp_value)
localStorage.setItem("otp",set_otp)

let emailBody = `
   <h1>INFINITI Booking OTP Verfication</h1> <br>
   <h2>Your OTP Code is</h2>${otp_value}
`;

    Email.send({
        SecureToken : "10e69c42-aca3-4f46-8404-5d2f85f24e9b",
        To : email_id.value,
        From : "100dayprojectfssa@gmail.com",
        Subject : "INFINITI - OTP Verification",
        Body : emailBody
    }).then(
      message => {
        if(message === "OK" ){
            alert("OTP sent to your Email Address "+email_id.value);
           
        }
       
        
       
      }
      
    );

    

}

function verifyOtp(){
    // let verify_btn = document.getElementById("OTP_btn")
    let getOtp = JSON.parse(localStorage.getItem("otp"));
    let otpverify = document.getElementById("otp_1").value+document.getElementById("otp_2").value+document.getElementById("otp_3").value+document.getElementById("otp_4").value;

    // verify_btn.addEventListener("submit",()=>{
        if (otpverify == getOtp){
            alert("Logged IN")
            window.open("/pages/profile.html")
        }
        else {
            alert("Invalid OTP")
        }
    console.log(otpverify)

    
}


