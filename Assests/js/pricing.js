
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
    document.getElementById("email").innerHTML = findedArr["email"]
    document.getElementById("date").innerHTML = selectedUser["date"]
    document.getElementById("time").innerHTML = selectedUser["time"]
    document.getElementById("seat_num").innerHTML = selectedUser["seat_num"]


