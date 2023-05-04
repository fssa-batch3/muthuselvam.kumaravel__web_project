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

    


    document.getElementById("first_name").innerHTML = selectedUser["first_name"];
    document.getElementById("last_name").innerHTML = selectedUser["last_name"];
    document.getElementById("email").innerHTML = selectedUser["email"];
    document.getElementById("phone_number").innerHTML = selectedUser["phone_num"];
    document.getElementById("date").innerHTML = findedarr["date"];
    document.getElementById("time").innerHTML = findedarr["time"];
    document.getElementById("booking_id").innerHTML = findedarr["booking_id"];
    document.getElementById("seat_number").innerHTML = findedarr["seat_num"];



