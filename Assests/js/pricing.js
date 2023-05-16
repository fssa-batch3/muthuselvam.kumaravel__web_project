
if(JSON.parse(localStorage.getItem("bookingObject"))==null){
    let removing = document.getElementById("card_details");
    removing.style.visibility = "hidden";
    const node = document.createElement("h1");
    node.setAttribute("id", "h1-booking");
const textnode = document.createTextNode("There is No booking done yet");
node.appendChild(textnode);
document.getElementById("orders").appendChild(node);
} else {
    let removing = document.getElementById("card_details");
    removing.style.visibility = "visible";
    // document.getElementById("h1-booking").style.visibility = "hidden";

}




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

    let logged_in = JSON.parse(localStorage.getItem("login_user"));
    let seat_already = JSON.parse(localStorage.getItem("seat_booking"));
    let seat_num = seat_already.filter(function (event) {
      let emailValue = event["login_email"];
      if (logged_in == emailValue) {
        return true;
      }
    });

    console.log(selectedUser)
    console.log(findedArr)

    // document.getElementById("name").innerHTML = findedArr["userName"]
    // document.getElementById("email").innerHTML = findedArr["email"]
    // document.getElementById("date").innerHTML = selectedUser["date"]
    // document.getElementById("time").innerHTML = selectedUser["time"]
    // document.getElementById("seat_num").innerHTML = selectedUser["seat_num"]



    for(let i=0; i<selectedUser.length;i++){

      // create a table body element
   const tableBody = document.createElement('tbody');
   tableBody.setAttribute('id', 't_body');
   // create a table row
   const row = document.createElement('tr');
   
   // create table cells for name, date, seat number, and status
   const nameCell = document.createElement('td');
   nameCell.setAttribute('id', 'name');
   nameCell.textContent = fullArray[i]["firstname"];
   
   
   const dateCell = document.createElement('td');
   dateCell.setAttribute('id', 'date');
   dateCell.textContent = fullArray[i]["date"];

   const timeCell = document.createElement('td');
   timeCell.setAttribute('id', 'time');
   timeCell.textContent = seat_num[i]["time"];
   
   const seatNumCell = document.createElement('td');
   seatNumCell.setAttribute('id', 'seat_num');
   seatNumCell.setAttribute('class', 'seat_num');
   seatNumCell.textContent = seat_num[i]["count"];
   
   
   const statusCell = document.createElement('td');
   const statusSpan = document.createElement('span');
   statusSpan.classList.add('Seat_No', 'delivered');
   statusSpan.textContent = 'Active';
   statusCell.appendChild(statusSpan);
   
   // add the cells to the row
   row.appendChild(nameCell);
   row.appendChild(dateCell);
   row.appendChild(timeCell);
   row.appendChild(seatNumCell);
   row.appendChild(statusCell);
   
   // add the row to the table body
   tableBody.appendChild(row);
   
   // add the table body to the HTML element
   const table = document.getElementById('recent_book');
   table.appendChild(tableBody);
    }
