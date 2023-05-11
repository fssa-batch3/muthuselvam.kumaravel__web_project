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
    let findedarr = total_arr.find(function (event) {
      let emailValue = event["email"];
      if (login_email == emailValue) {
        return true;
      }
    });

console.log(findedarr);
console.log(selectedUser);

    

    document.getElementById("company_name").innerText = "FRESHWORKS"
    document.getElementById("first_name").innerText = selectedUser["first_name"];
    document.getElementById("last_name").innerText = selectedUser["last_name"];
    document.getElementById("email").innerText = selectedUser["email"];
    document.getElementById("phone_number").innerText = selectedUser["phone_num"];
    document.getElementById("date").innerText = findedarr["date"];
    document.getElementById("time").innerText = findedarr["time"];
    document.getElementById("booking_id").innerText = findedarr["booking_id"];
    document.getElementById("seat_number").innerText = findedarr["seat_num"];




    