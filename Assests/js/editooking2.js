let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${day}.${month}.${year}`;

let tomorrow = new Date();
tomorrow.setDate(date.getDate() + 1);
let day_2 = tomorrow.getDate();
let month_2 = tomorrow.getMonth()+1;
let year_2 = tomorrow.getFullYear();

let fullDate_2 = `${day_2}.${month_2}.${year_2}`;


let x = document.getElementById("date");
let option = document.createElement("option");
option.text = fullDate;
x.add(option);

let option_2 = document.createElement("option");
option_2.text = fullDate_2;
x.add(option_2);


let clicked_id =JSON.parse(localStorage.getItem("clicked_id"))


let d = new Date(),
    h = (d.getHours()<10?'0':'') + d.getHours(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes();
  current_time =  h + ':' + m;


    let oneUser = JSON.parse(localStorage.getItem("login_user"));
    let fullArray = JSON.parse(localStorage.getItem("bookingObject"));
    let selectedUser = fullArray.filter(function (event) {
      let emailValue = event["email"];
      if (oneUser == emailValue) {
        return true;
      }
    });
    console.log(selectedUser[clicked_id])


    let logged_in = JSON.parse(localStorage.getItem("login_user"));
    let seat_already = JSON.parse(localStorage.getItem("seat_booking"));
    let seat_num = seat_already.filter(function (event) {
      let emailValue = event["login_email"];
      if (logged_in == emailValue) {
        return true;
      }
    });
    console.log(seat_num)

    console.log(clicked_id)
    console.log(selectedUser)

     document.getElementById("first_29").value = selectedUser[clicked_id]["firstname"];
     document.getElementById("last_29").value = selectedUser[clicked_id]["lastname"];
     document.getElementById("input_30").value = selectedUser[clicked_id]["email"];
     document.getElementById("input_31_full").value = selectedUser[clicked_id]["phonenum"];
     document.getElementById("date").value = selectedUser[clicked_id]["date"];
     document.getElementById("time").value = selectedUser[clicked_id]["time"];


const form = document.getElementById("edit_form");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        let edit_array = [];
        let e = document.getElementById("date").value;
      console.log(e.length)
      let e_2 = document.getElementById("time").value;
      console.log(e_2.length)
        if(e.length == 0 || e_2.length == 0){
          alert("Please Enter Your Date and Time");
          return;
        }
        if(e == fullDate){
          if (e_2 < current_time){
            alert("Enter a valid Hours and Minutes");
            return
          }
        }
        let firstName = document.getElementById("first_29").value;
        let lastName = document.getElementById("last_29").value;
        let email = document.getElementById("input_30").value;
        let phoneNum = document.getElementById("input_31_full").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let booking_id = "#"+Math.floor(100000000 + Math.random() * 900000000);

        let newData = {
          booking_id :booking_id,
          firstname: firstName,
            lastname: lastName,
            email: email,
            phonenum: phoneNum,
            date: date,
            time: time,
            seat_num: null,
            uuid: Date.now()
            }

            
      const str = JSON.stringify(newData);
      localStorage.setItem("edit_array", str);
      alert("successfully changed");
        window.open("/pages/afterbooking2.html");

      });