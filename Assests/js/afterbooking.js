


let today_booking = 0;

let oneUser = JSON.parse(localStorage.getItem("login_user"));
    let fullArray = JSON.parse(localStorage.getItem("bookingObject"));
    let selectedUser = fullArray.filter(function (event) {
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



let sub_btn =document.getElementById("input_2")

let a_tag = document.createElement("a");
a_tag.setAttribute("href","../pages/seatbooking.html?date="+selectedUser[selectedUser.length-1]["date"]+"&time="+selectedUser[selectedUser.length-1]["time"])
a_tag.setAttribute("id","submit")
a_tag.textContent = "Submit"
sub_btn.append(a_tag)

    document.getElementById("first_name").innerHTML = findedArr["first_name"];
    document.getElementById("second_name").innerHTML = findedArr["last_name"];
    document.getElementById("email").innerHTML = findedArr["email"];
    document.getElementById("phone_number").innerHTML = findedArr["phone_num"];
    document.getElementById("date").innerHTML = selectedUser[selectedUser.length-1]["date"];
    document.getElementById("time").innerHTML = selectedUser[selectedUser.length-1]["time"];




    let pForm = document.getElementById("231190591447457");
      pForm.addEventListener("submit", function (event) {
        event.preventDefault();
       today_booking += 1;
       let booking = JSON.stringify(today_booking)
       localStorage.setItem("today_bookings",booking);
        alert("successfully completed");
       
      });


