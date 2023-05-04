// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


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

    console.log(selectedUser)
    console.log(findedArr)

    document.getElementById("name").innerHTML = findedArr["userName"]
    document.getElementById("date").innerHTML = selectedUser["date"]
    document.getElementById("seat_num").innerHTML = selectedUser["seat_num"]