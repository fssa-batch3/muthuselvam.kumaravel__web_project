
let user_details = JSON.parse(localStorage.getItem("user_info"));

function showTables(user_details){

for (let i=0; i<user_details.length; i++){

let table = document.querySelector("tbody");


let row = document.createElement("tr");


let headerCell = document.createElement("th");
headerCell.textContent = user_details[i]["userName"];
row.appendChild(headerCell);


let dataCell1 = document.createElement("td");
dataCell1.textContent = user_details[i]["email"] || user_details[i]["userEmail"]
row.appendChild(dataCell1);

let dataCell2 = document.createElement("td");
dataCell2.textContent = user_details[i]["phone_num"];
row.appendChild(dataCell2);

let dataCell3 = document.createElement("td");
dataCell3.textContent = user_details[i]["location"];
row.appendChild(dataCell3);


table.appendChild(row);
}
}

showTables(user_details)


let company = document.getElementById("company");
let company_value = company.value;

let total_arr = JSON.parse(localStorage.getItem("user_info"));
// let findedarr = total_arr.filter(function (event) {
//   let emailValue = event["email"];
//   if (login_email == emailValue) {
//     return true;
//   }
// });
let filterarray = [];

if(company_value == "freshworks"){


filterarray = total_arr.filter(function(a){
    document.querySelector("tbody").innerHTML = "";
    if(a.userEmail.includes(company_value)){
      return a.userEmail;
    }
  });
  showTables(filterarray)
} else{
    if(company_value == "all"){
        showTables(user_details)
    } else{
    document.querySelector("tbody").innerHTML = "";
    }

}



 