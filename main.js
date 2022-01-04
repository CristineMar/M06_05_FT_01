let fruits = ["Banana", "Orange", "Apple", "Mango"];
let i = 0;

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

  let rowTable = document.createElement("tr");
  let columnfruit = document.createElement("td");
  let columndate = document.createElement("td");
  let columnbuyMe = document.createElement("td");
  let columnedit = document.createElement("td");
  let dlt = document.createElement("button");
  let edit = document.createElement("button");
  rowTable.id = "row" + i++;
  dlt.innerHTML = "delete";
  dlt.style.margin = "0 2.5px 0 2.5px";
  dlt.style.borderRadius = "5px";
  dlt.style.color = "#fff";
  dlt.style.backgroundColor = "#dc3545";
  dlt.id = i;
  /* 

  edit.innerHTML = "edit";
  edit.style.margin = "0 2.5px 0 2.5px";
  edit.style.borderRadius = "5px";
  edit.style.color = "#fff";
  edit.style.backgroundColor = "#0d6efd";
  edit.id = i;

  edit.addEventListener("click", function () {
    editItem(this.id)
  }); */
  dlt.addEventListener("click", function () {
    deleteItem(this.id);
  });

  columnfruit.innerHTML = myGrocery[0];
  columndate.innerHTML = myGrocery[1];
  columnbuyMe.innerHTML = myGrocery[2];
  columnedit.append(dlt);
  rowTable.append(columnfruit, columndate, columnbuyMe, columnedit);
  table.appendChild(rowTable);
  let frm = document.getElementsByName("myForm")[0];
  frm.reset();
  return false;
}

function hanFetClick(id) {
  document.getElementById(id);
  alert("clicked!" + id);
}

function deleteItem(element) {
  document.getElementsByTagName("tr")[element].remove();
  setTimeout(() => {
      alert("deleted!");
  }, 300);
}

window.onload = function () {
  myFruits();
};
