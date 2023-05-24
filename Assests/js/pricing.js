

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
    console.log(seat_num)
    console.log(fullArray)


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
   nameCell.textContent = selectedUser[i]["firstname"];
   
   
   const dateCell = document.createElement('td');
   dateCell.setAttribute('id', 'date');
   dateCell.textContent = selectedUser[i]["date"];

   const timeCell = document.createElement('td');
   timeCell.setAttribute('id', 'time');
   timeCell.textContent = selectedUser[i]["time"];
   
   const seatNumCell = document.createElement('td');
   seatNumCell.setAttribute('id', 'seat_num');
   seatNumCell.setAttribute('class', 'seat_num');
   seatNumCell.textContent = selectedUser[i]["seat_num"];
   
   
   const statusCell = document.createElement('td');
   const statusSpan = document.createElement('span');
   statusSpan.classList.add('Seat_No', 'delivered');
   statusSpan.textContent = 'Active';
   statusCell.appendChild(statusSpan);

   const editbtn = document.createElement("button");
   editbtn.setAttribute("id",i)
   editbtn.setAttribute("class","edit")
   editbtn.setAttribute("onclick","reply_click(this.id)")
   editbtn.textContent = "Edit"

   const deletebtn = document.createElement("button");
   deletebtn.setAttribute("id",i)
   deletebtn.setAttribute("class","delete")
   deletebtn.setAttribute("onclick","reply_click_delete(this.id)")
   deletebtn.textContent = "Delete"
   
   // add the cells to the row
   row.appendChild(nameCell);
   row.appendChild(dateCell);
   row.appendChild(timeCell);
   row.appendChild(seatNumCell);
   row.appendChild(statusCell);
   row.appendChild(editbtn );
   row.appendChild(deletebtn );

   

   
   // add the row to the table body
   tableBody.appendChild(row);
   
   // add the table body to the HTML element
   const table = document.getElementById('recent_book');
   table.appendChild(tableBody);
    }

    function reply_click(clicked_id){
      let string_id = JSON.stringify(clicked_id);
      localStorage.setItem("clicked_id",string_id);
      window.open("/pages/editbooking2.html?edit=true")
  }

   function reply_click_delete(clicked_id){
    let string_id = JSON.stringify(clicked_id);
      localStorage.setItem("clicked_id",string_id);
      console.log(clicked_id)
      let oneUser = JSON.parse(localStorage.getItem("login_user"));
    let fullArray = JSON.parse(localStorage.getItem("bookingObject"));
    let selectedUser = fullArray.filter(function (event) {
      let emailValue = event["email"];
      if (oneUser == emailValue) {
        return true;
      }
    });
    console.log(selectedUser)
    let clicked_id_2 = JSON.parse(localStorage.getItem("clicked_id"))
    let indexDel = selectedUser[clicked_id_2];
    let msg = confirm("Are you sure you want to delete this booking?");
    if (msg !== true) {
      return;
    } else {
      fullArray.splice(indexDel, 1);
      console.log(fullArray);
      localStorage.setItem("bookingObject", JSON.stringify(fullArray));
      alert("booking was deleted");
      // window.location.href ="";
    }
   }