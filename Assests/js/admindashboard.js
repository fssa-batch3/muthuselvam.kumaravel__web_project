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


    document.getElementById("total_users").innerHTML = JSON.parse(localStorage.getItem("user_info")).length;
    document.getElementById("total_active").innerHTML = JSON.parse(localStorage.getItem("login_user")).length - JSON.parse(localStorage.getItem("login_user")).length +1;
    document.getElementById("today_login").innerHTML = JSON.parse(localStorage.getItem("today_logged"));
    document.getElementById("total_booking").innerHTML = JSON.parse(localStorage.getItem("today_bookings"));


   for (let i=0; i<fullarr.length;i++){

// create a table element
const table = document.createElement('table');

// create a table row
const row = document.createElement('tr');

// create a table cell for the image
const imgCell = document.createElement('td');
imgCell.setAttribute('width', '60px');

// create a div for the image and add it to the cell
const imgDiv = document.createElement('div');
imgDiv.classList.add('imgBx');
const img = document.createElement('img');
img.setAttribute('src', 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png');
img.setAttribute('alt', '');
imgDiv.appendChild(img);
imgCell.appendChild(imgDiv);

// create a table cell for the name and country
const nameCell = document.createElement('td');
const name = document.createElement('h4');
name.textContent = fullarr[i]["userName"];
const country = document.createElement('span');
country.textContent = fullarr[i]["location"];
name.appendChild(document.createElement('br'));
name.appendChild(country);
nameCell.appendChild(name);

// add the cells to the row and the row to the table
row.appendChild(imgCell);
row.appendChild(nameCell);
table.appendChild(row);

// add the table to the HTML element
const element = document.getElementById('recent_cus');
element.appendChild(table);


   }


   for(let i=0; i<fullArray.length;i++){

   // create a table body element
const tableBody = document.createElement('tbody');

// create a table row
const row = document.createElement('tr');

// create table cells for name, date, seat number, and status
const nameCell = document.createElement('td');
nameCell.setAttribute('id', 'name');
nameCell.textContent = fullArray[i]["firstname"];


const dateCell = document.createElement('td');
dateCell.setAttribute('id', 'date');
dateCell.textContent = fullArray[i]["date"];


const seatNumCell = document.createElement('td');
seatNumCell.setAttribute('id', 'seat_num');
seatNumCell.textContent = fullArray[i]["seat_num"];


const statusCell = document.createElement('td');
const statusSpan = document.createElement('span');
statusSpan.classList.add('status', 'delivered');
statusSpan.textContent = 'Active';
statusCell.appendChild(statusSpan);

// add the cells to the row
row.appendChild(nameCell);
row.appendChild(dateCell);
row.appendChild(seatNumCell);
row.appendChild(statusCell);

// add the row to the table body
tableBody.appendChild(row);

// add the table body to the HTML element
const table = document.getElementById('recent_book');
table.appendChild(tableBody);
   }

