const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const seats_2 = document.querySelectorAll(".seat")
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

// populateUI();



// Save selected movie index and price
// function setMovieData(movieIndex) {
//   localStorage.setItem("selectedMovieIndex", movieIndex);
// }

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat)+1);

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  

  
}


// Get data from localstorage and populate UI
// function populateUI() {
//   const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

//   if (selectedSeats !== null && selectedSeats.length > 0) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         console.log(seat.classList.add("selected"));
//       }
//     });
//   }

//   const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

//   if (selectedMovieIndex !== null) {
//     movieSelect.selectedIndex = selectedMovieIndex;
//     console.log(selectedMovieIndex)
//   }
// }
// console.log(populateUI());

// Seat click event
container.addEventListener("click", (e) => {
  // if(seats_2.contains("selected")){
  //   seats_2.classList.toggle("selected")
  // }
 JSON.stringify( localStorage.setItem("selectedSeats"))
  console.log(JSON.parse(localStorage.getItem("selectedSeats")).length)
if(JSON.parse(localStorage.getItem("selectedSeats")<=1)){
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold") || 
    seats_2.classList.contains("selected")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
} else {
  alert("You Already Selected the seat")
}

  
});

// Initial count and total set
// updateSelectedCount();