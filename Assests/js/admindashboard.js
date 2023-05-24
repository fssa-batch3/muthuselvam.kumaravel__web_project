





    let fullArray = JSON.parse(localStorage.getItem("bookingObject"));
    

    let fullarr = JSON.parse(localStorage.getItem("user_info"));
      let seat_array = JSON.parse(localStorage.getItem("seat_booking"))

    // console.log(selectedUser)
    // console.log(findedArr)

   
    if (JSON.parse(localStorage.getItem("user_info"))!=null){

    document.getElementById("total_users").innerHTML = JSON.parse(localStorage.getItem("user_info")).length;
    document.getElementById("total_active").innerHTML = JSON.parse(localStorage.getItem("user_info")).length;
    document.getElementById("today_login").innerHTML = JSON.parse(localStorage.getItem("today_logged"));
    document.getElementById("total_booking").innerHTML = JSON.parse(localStorage.getItem("bookingObject")).length;


}
   //  let logout = document.getElementById("logout");
   //  logout.addEventListener("click", function (event) {
   //    event.preventDefault();
   //    let msg = confirm("Are you sure you want to logout this account");
   //    if (msg !== true) {
   //      return;
   //    } else {
   //      localStorage.setItem("login_user", JSON.stringify(null));
   //       window.location.href ="../index.html";
   //    }
   //  });

   if (JSON.parse(localStorage.getItem("user_info"))!=null){


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
}


if (JSON.parse(localStorage.getItem("bookingObject"))!=null){


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

}