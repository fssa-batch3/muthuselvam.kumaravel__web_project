let oneUser = JSON.parse(localStorage.getItem("login_user"));
    let fullArray = JSON.parse(localStorage.getItem("bookingObject"));
    let selectedUser = fullArray.find(function (event) {
      let emailValue = event["email"];
      if (oneUser == emailValue) {
        return true;
      }
    });
    let logged_user = JSON.parse(localStorage.getItem("login_user"));
    let fullarr = JSON.parse(localStorage.getItem("user_info"));
    let findedArr = fullarr.find(function (event) {
      let emailValue = event["email"];
      if (logged_user == emailValue) {
        return true;
      }
    });

    console.log(selectedUser);

    document.getElementById("first_name").innerHTML = findedArr["first_name"];
    document.getElementById("last_name").innerHTML = findedArr["last_name"];
    document.getElementById("email").innerHTML = findedArr["email"];
    document.getElementById("phone_number").innerHTML = findedArr["phone_num"];
    document.getElementById("date").innerHTML = selectedUser["date"];
    document.getElementById("time").innerHTML = selectedUser["time"];


    let pForm = document.getElementById("231190591447457");
      pForm.addEventListener("submit", function (event) {
        event.preventDefault();
       
        alert("successfully completed");
        window.open("/pages/finalconfirmation.html")
      });


