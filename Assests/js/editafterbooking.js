let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${day}.${month}.${year}.`;

let tomorrow = new Date();
tomorrow.setDate(date.getDate() + 1);
let day_2 = tomorrow.getDate();
let month_2 = tomorrow.getMonth()+1;
let year_2 = tomorrow.getFullYear();

let fullDate_2 = `${day_2}.${month_2}.${year_2}.`;

function myfunction(){
let x = document.getElementById("date");
let option = document.createElement("option");
option.text = fullDate;
x.add(option);

let option_2 = document.createElement("option");
option_2.text = fullDate_2;
x.add(option_2);
}


    let oneUser = JSON.parse(localStorage.getItem("login_user"));
    let fullArray = JSON.parse(localStorage.getItem("user_info"));
    let selectedUser = fullArray.find(function (event) {
      let emailValue = event["email"];
      if (oneUser == emailValue) {
        return true;
      }
    });

    console.log(selectedUser)

     document.getElementById("first_29").value = selectedUser["first_name"];
     document.getElementById("last_29").value = selectedUser["last_name"];
     document.getElementById("input_30").value = selectedUser["email"];
     document.getElementById("input_31_full").value = selectedUser["phone_num"];


const form = document.getElementById("edit_form");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
       
        let firstName = document.getElementById("first_29").value;
        let lastName = document.getElementById("last_29").value;
        let email = document.getElementById("input_30").value;
        let phoneNum = document.getElementById("input_31_full").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;

        let newData = {first_name: firstName,
            last_name: lastName,
            email: email,
            phone_num: phoneNum,
            date: date,
            time: time,}

            let combinedData = Object.assign(selectedUser, newData);
      let findIndex = fullArray.indexOf(selectedUser);
      fullArray[findIndex] = combinedData;
      localStorage.setItem("bookingObject", JSON.stringify(fullArray));
      alert("successfully changed");
        window.open("/pages/afterbooking.html");

      });