let printBtn = document.getElementById("print");

    printBtn.addEventListener('click',function(){
      window.print();
    })



let oneUser = JSON.parse(localStorage.getItem("login_user"));
    let fullArray = JSON.parse(localStorage.getItem("user_info"));
    let selectedUser = fullArray.find(function (event) {
      let emailValue = event["email"];
      if (oneUser == emailValue) {
        return true;
      }
    });

    let login_email = JSON.parse(localStorage.getItem("login_user"));
    let total_arr = JSON.parse(localStorage.getItem("bookingObject"));
    console.log(total_arr)
    let findedarr = total_arr.filter(function (event) {
      let emailValue = event["email"];
      console.log(emailValue)
      if (login_email == emailValue) {
        return true;
      }
    });

    let logged_in = JSON.parse(localStorage.getItem("login_user"));
    let seat_already = JSON.parse(localStorage.getItem("seat_booking"));
    let seat_num = seat_already.filter(function (event) {
      let emailValue = event["login_email"];
      if (logged_in == emailValue) {
        return true;
      }
    });

console.log(findedarr);
console.log(selectedUser);
console.log(seat_num)
const possibleChars = "0123456789";


let booking_id = ""

for (let i = 0; i < 12; i++) {
  booking_id += possibleChars.charAt(
    Math.floor(Math.random() * possibleChars.length)
  );
}
    

    document.getElementById("company_name").innerText = "FRESHWORKS"
    document.getElementById("first_name").innerText = selectedUser["first_name"];
    document.getElementById("last_name").innerText = selectedUser["last_name"];
    document.getElementById("email").innerText = selectedUser["email"];
    document.getElementById("phone_number").innerText = selectedUser["phone_num"];
    document.getElementById("date").innerText = findedarr[findedarr.length-1]["date"];
    document.getElementById("time").innerText = findedarr[findedarr.length-1]["time"];
    document.getElementById("booking_id").innerText = "#"+booking_id;
    document.getElementById("seat_number").innerText ="#"+ seat_num[seat_num.length-1]["count"];




    