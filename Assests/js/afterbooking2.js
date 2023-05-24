

let edit_array = JSON.parse(localStorage.getItem("edit_array"));

console.log(edit_array)
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
a_tag.setAttribute("href","../pages/seatbooking.html?date="+edit_array["date"]+"&time="+edit_array["time"]+"&edit=true")
a_tag.setAttribute("id","submit")
a_tag.textContent = "Submit"
sub_btn.append(a_tag)

    document.getElementById("first_name").innerHTML = edit_array["firstname"];
    document.getElementById("second_name").innerHTML = edit_array["lastname"];
    document.getElementById("email").innerHTML = edit_array["email"];
    document.getElementById("phone_number").innerHTML = edit_array["phonenum"];
    document.getElementById("date").innerHTML = edit_array["date"];
    document.getElementById("time").innerHTML = edit_array["time"];




    let pForm = document.getElementById("231190591447457");
      pForm.addEventListener("submit", function (event) {
        event.preventDefault();
       today_booking += 1;
       let booking = JSON.stringify(today_booking)
       localStorage.setItem("today_bookings",booking);
        alert("successfully completed");
       
      });


