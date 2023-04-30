let oneUser = JSON.parse(localStorage.getItem("login_user"));
    let fullArray = JSON.parse(localStorage.getItem("bookingObject"));
    let selectedUser = fullArray.find(function (event) {
      let emailValue = event["email"];
      if (oneUser == emailValue) {
        return true;
      }
    });

    console.log(selectedUser);

    document.getElementById("first_name").innerHTML = selectedUser["first_name"];
    document.getElementById("last_name").innerHTML = selectedUser["last_name"];
    document.getElementById("email").innerHTML = selectedUser["email"];
    document.getElementById("phone_number").innerHTML = selectedUser["phone_num"];
    document.getElementById("date").innerHTML = selectedUser["date"];
    document.getElementById("time").innerHTML = selectedUser["time"];


    let pForm = document.getElementById("231190591447457");
      pForm.addEventListener("submit", function (event) {
        event.preventDefault();
       
        alert("successfully completed");
        // window.open("/pages/company logo.html")
      });


