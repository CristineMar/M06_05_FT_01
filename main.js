let fruits = ["Banana", "Orange", "Apple", "Mango"];

function myFruits() {
  let fruit = document.getElementById("mySelect");
  for (let i = 0; i < fruits.length; i++) {
    let option = document.createElement("option");
    option.text = fruits[i];
    fruit.add(option);
  }
}

function addFruit() {
  let fruit = document.getElementById("mySelect").value;
  let date = document.getElementById("expiry").value;
  let buyMe = document.getElementById("buyMe").value;

  if (date == "") {
    date = new Date().toISOString().split("T")[0];
  }

  myGrocery = [fruit, date, buyMe];

  let table = document.getElementById("myTable");

  let rowTable = table.insertRow(1);
  for (let y = 0; y < myGrocery.length; y++) {
    let column = rowTable.insertCell(y);
      column.innerHTML = myGrocery[y];
  }
  let frm = document.getElementsByName("myForm")[0];
  frm.reset();
    return false;
}

window.onload = function () {
  myFruits();
};
