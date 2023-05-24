

 


// alert("Your OTP verification code has been sent to " + JSON.parse(localStorage.getItem("login_user")))


function sendOtp(){
    let email_id = document.getElementById("email");
    // let otpverify = document.getElementById("otp_1").value+document.getElementById("otp_2").value+document.getElementById("otp_3").value+document.getElementById("otp_4").value;
    const possibleChars = "0123456789";

  // Initialize an empty string to store the OTP
  let OTP = "";

  // Generate a random 4-digit number by picking a random character from the possibleChars string four times
  for (let i = 0; i < 4; i++) {
    OTP += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }

let set_otp = JSON.stringify(OTP)
localStorage.setItem("otp",set_otp)

let emailBody = `
   <h1>INFINITI Booking OTP Verfication</h1> <br>
   <h2>Your OTP Code is</h2>${OTP}
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
            // alert("OTP sent to your Email Address "+email_id.value);
           
        }
       
        
       
      }
      
    );

    

}

let otp_btn=document.querySelector("form")
otp_btn.addEventListener("submit",(e)=>{
   e.preventDefault();
   verifyOtp();
})
function verifyOtp(){
    // let verify_btn = document.getElementById("OTP_btn")
    let otp_verified =0 ;

    let getOtp = JSON.parse(localStorage.getItem("otp"));
    let otpverify = document.getElementById("otp_1").value+document.getElementById("otp_2").value+document.getElementById("otp_3").value+document.getElementById("otp_4").value;

    // verify_btn.addEventListener("submit",()=>{
        if (otpverify == getOtp){
            otp_verified+=1;
            alert("Logged IN")
            window.location.href="../index.html";
        }
        else {
            alert("Invalid OTP")
        }
    console.log(otpverify)

    let otp_verify = JSON.stringify(otp_verified)
    localStorage.setItem("today_logged",otp_verify);

    
}


