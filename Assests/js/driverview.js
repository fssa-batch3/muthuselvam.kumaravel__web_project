const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const seats_selected = document.querySelectorAll(".row .seat ")
const count = document.getElementById("count");


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
option.setAttribute("id", "today_date")
option.value = fullDate;
option.text = fullDate;
x.add(option);

let option_2 = document.createElement("option");
option_2.setAttribute("id", "tomorrow_date")
option_2.value = fullDate_2
option_2.text = fullDate_2;
x.add(option_2);


// let time_slot = JSON.parse(localStorage.getItem("bookingObject"))
// document.getElementById("time_slot").innerHTML = time_slot[time_slot.length-1]["time"]
// console.log(seats_selected)





// Update  count
// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll(".row .seat.selected");

//   const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat)+1);

//   localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));


//   count.innerText = seatsIndex;
  
// console.log(seatsIndex)
// console.log(JSON.parse(localStorage.getItem("selectedSeats")).length)
  
// }



  

  let find = document.getElementById("find");
  find.addEventListener("click", function(){
    let date = document.getElementById("date").value
    let time = document.getElementById("time").value
window.location.href = "../pages/driverview.html?date="+date+"&time="+time
  })

  let params = window.location.search;
  console.log(params);
  let parameter = new URLSearchParams(params);
  let paraName = parameter.get("date");
  let paraName_2 = parameter.get("time");
  console.log(paraName)
  console.log(paraName_2)




  let seat_booked = JSON.parse(localStorage.getItem("bookingObject"));
  console.log(seat_booked)
  let seatObj = seat_booked.filter(function (user) {
        let title = user["date"];
        let title_2 = user["time"];
        console.log(title);
        console.log(title_2);
        if (paraName == title) {
          console.log(paraName)
          if(paraName_2 == title_2){
            console.log(paraName_2)
            return true;
          }
        } else {
          return false;
        }
      });
      console.log(seatObj)

      for (let j=0; j<seatObj.length; j++){

    if(seatObj[j]["date"] == paraName){
      console.log(true)
      if(seatObj[j]["time"] == paraName_2){
        console.log(true)
        if(seatObj[j]["seat_num"]!= null){
        for (let i=0; i<seatObj.length;i++){
          let seat_num = seatObj[i]["seat_num"] -1
    seats[seat_num].classList.add("sold")
      }
    }
    }
    
 
}

}











// let confirm_btn = document.getElementById("confirm")
// confirm_btn.addEventListener("click", function(event){
//   event.preventDefault();
//   let seatbooked = [];
//  let editted_array =[];
//   if (localStorage.getItem("seat_booking") != null) {
//     seatbooked = JSON.parse(localStorage.getItem("seat_booking"));
//   }
//   let bookingobject = JSON.parse(localStorage.getItem("bookingObject"))
//   if (localStorage.getItem("edit_array") != null) {
//    editted_array = JSON.parse(localStorage.getItem("edit_array"))
//   }
//   let count = document.getElementById("count").innerHTML

//   let seat_num = {seat_num: count}
//   let params = window.location.search;
//   console.log(params);
//   let parameter = new URLSearchParams(params);
//   let paraName = parameter.get("edit");

//   if(paraName == true){
//     let clicked_id = JSON.parse(localStorage.getItem("clicked_id"))
//     let oneUser = JSON.parse(localStorage.getItem("login_user"));
// let fullArray = JSON.parse(localStorage.getItem("bookingObject"));
// let selectedUser = fullArray.find(function (event) {
//   let emailValue = event["email"];
//   if (oneUser == emailValue) {
//     return true;
//   }
// });
// let seat_num = {seat_num: count}
//   let combinedData = Object.assign(editted_array, seat_num);
//   selectedUser[clicked_id] = combinedData;
//   localStorage.setItem("bookingObject", JSON.stringify(fullArray));

//   } else {
//   let combinedData = Object.assign(bookingobject[bookingobject.length-1], seat_num);
//   // let findIndex = fullArray.indexOf(selectedUser);
//   fullArray[fullArray.length-1] = combinedData;
//   localStorage.setItem("bookingObject", JSON.stringify(fullArray));
//   let login_id = JSON.parse(localStorage.getItem("login_user"))
//   let seat_data = {count : count,date: time_slot[time_slot.length-1]["date"], time: time_slot[time_slot.length-1]["time"] ,login_email: login_id}
// seatbooked.push(seat_data);
// localStorage.setItem("seat_booking",JSON.stringify(seatbooked));
// for(let i=0; i<seats_selected.length; i++){
//   if (seats_selected[i].classList.contains("selected")){
//     seats_selected[i].classList.remove("selected")
//     seats_selected[i].classList.add("sold")
//   }
// }
// window.location.href = ""
//   }
// })

