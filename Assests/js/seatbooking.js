const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const seats_selected = document.querySelectorAll(".row .seat ")
const count = document.getElementById("count");



let time_slot = JSON.parse(localStorage.getItem("bookingObject"))
document.getElementById("time_slot").innerHTML = time_slot[time_slot.length-1]["time"]
console.log(seats_selected)





// Update  count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat)+1);

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));


  count.innerText = seatsIndex;
  
console.log(seatsIndex)
console.log(JSON.parse(localStorage.getItem("selectedSeats")).length)
  
}



// Seat click event
container.addEventListener("click", (e) => {
 
  let seat_arr = [];
if(JSON.parse(localStorage.getItem("selectedSeats"))== null){
  localStorage.setItem("selectedSeats", JSON.stringify(seat_arr));

}


  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold") 
  ) {
  for(let i=0; i<seats_selected.length; i++){
    if (seats_selected[i].classList.contains("selected")){
      seats_selected[i].classList.remove("selected")
    }
  }
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
 


  
});



let oneUser = JSON.parse(localStorage.getItem("login_user"));
let fullArray = JSON.parse(localStorage.getItem("bookingObject"));
let selectedUser = fullArray.filter(function (event) {
  let emailValue = event["email"];
  if (oneUser == emailValue) {
    return true;
    // console.log(selectedUser)
  }
});




let confirm_btn = document.getElementById("confirm")
confirm_btn.addEventListener("click", function(event){
  event.preventDefault();
  let seatbooked = [];
 let editted_array =[];
  if (localStorage.getItem("seat_booking") != null) {
    seatbooked = JSON.parse(localStorage.getItem("seat_booking"));
  }
  let bookingobject = JSON.parse(localStorage.getItem("bookingObject"))
  if (localStorage.getItem("edit_array") != null) {
   editted_array = JSON.parse(localStorage.getItem("edit_array"))
  }
  let count = document.getElementById("count").innerHTML

  let seat_num = {seat_num: count}
  let params = window.location.search;
  console.log(params);
  let parameter = new URLSearchParams(params);
  let paraName = parameter.get("edit");
console.log(paraName)
  if(paraName == true){
    let clicked_id = JSON.parse(localStorage.getItem("clicked_id"))
    let oneUser = JSON.parse(localStorage.getItem("login_user"));
let fullArray = JSON.parse(localStorage.getItem("bookingObject"));
let selectedUser = fullArray.filter(function (event) {
  let emailValue = event["email"];
  if (oneUser == emailValue) {
    // return true;
    console.log(selectedUser)
  }
});
let seat_num = {seat_num: count}
  let combinedData = Object.assign(editted_array[0], seat_num);
  selectedUser[clicked_id] = combinedData;
  localStorage.setItem("bookingObject", JSON.stringify(fullArray));

  } else {
  let combinedData = Object.assign(bookingobject[bookingobject.length-1], seat_num);
  // let findIndex = fullArray.indexOf(selectedUser);
  fullArray[fullArray.length-1] = combinedData;
  localStorage.setItem("bookingObject", JSON.stringify(fullArray));
  let login_id = JSON.parse(localStorage.getItem("login_user"))
  let seat_data = {count : count,date: time_slot[time_slot.length-1]["date"], time: time_slot[time_slot.length-1]["time"] ,login_email: login_id}
seatbooked.push(seat_data);
localStorage.setItem("seat_booking",JSON.stringify(seatbooked));
for(let i=0; i<seats_selected.length; i++){
  if (seats_selected[i].classList.contains("selected")){
    seats_selected[i].classList.remove("selected")
    seats_selected[i].classList.add("sold")
  }
}
window.location.href = "../pages/finalconfirmation.html"
  }
})



if(JSON.parse(localStorage.getItem("seat_booking")) != null){
  let params = window.location.search;
  console.log(params);
  let parameter = new URLSearchParams(params);
  let paraName = parameter.get("date");
  let paraName_2 = parameter.get("time");
  let parraArray = JSON.parse(localStorage.getItem("bookingObject"));
  console.log(paraName)
  console.log(paraName_2)

let last_booking=  parraArray[parraArray.length-1]
if (paraName == last_booking["date"]){
console.log(true)
if (paraName_2 == last_booking["time"]){
console.log(true)
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
          let seat_num = seatObj[i]["seat_num"] -1;
          console.log(seat_num);
    seats[seat_num].classList.add("sold")
      }
    }
    }
    
  } else {
    console.log(false)
  }
}

}
}
}


