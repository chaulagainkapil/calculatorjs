//Variables declarations
var cost = document.getElementById("amount");
var person = document.getElementById("people");
var peopleWarning = document.getElementById("people-warning");
var costWarning = document.getElementById("cost-warning");
var customShowing = document.getElementById("customvalue");
var totalShowing = document.getElementById("totalamount");
var tipShowing = document.getElementById("tipPerPerson");
var tipValue = 0.0;

//To check value of cost
function checkWarningc() {
  if (cost.value != "") {
    if (cost.value <= 0) {
      costWarning.innerHTML = "More than 0.00";
    } else {
      costWarning.innerHTML = "";
    }
  } else {
    costWarning.innerHTML = "";
  }
}
// To check value of people
function checkWarning() {
  if (person.value != "") {
    if (parseInt(person.value) == person.value) {
      if (person.value < 1) {
        peopleWarning.innerHTML = "Can't be zero or less";
      } else {
        peopleWarning.innerHTML = " ";
      }
    } else {
      peopleWarning.innerHTML = "Only natural numbers";
    }
  } else {
    peopleWarning.innerHTML = " ";
  }
}

//Select button
function tipPercent(btnID){
    if(btnID != "customPercent"){
        tipValue= document.getElementById(btnID).value;
    }
    else{
        console.log("check");
        tipValue= document.getElementById("customPerc").value;
    }
 
}

//To open custom box
function openCustom() {
  customShowing.style.display = "flex";
}

//Calculation of total amount
setInterval(function calculate() {
  if (cost.value >= 0 && person.value >= 1) {
    var total = (cost.value / person.value).toFixed(2);
    totalShowing.innerHTML = "$" + total;
    var totaltip = (tipValue * cost.value / person.value).toFixed(2);
    tipShowing.innerHTML = "$" + totaltip;
  }
  else{
    totalShowing.innerHTML = "$0.00";
    tipShowing.innerHTML = "$0.00";
  }
}, 10);

//for Reset
function resetAll() {
  if (person.value != "") {
    person.value = "";
  }
  if (cost.value != "") {
    cost.value = "";
  }
  if (customShowing.style.display == "flex") {
    customShowing.style.display = "none";
  }
}
