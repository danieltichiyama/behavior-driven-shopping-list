"use strict";

let shoppingList = new ShoppingList();
let content = document.getElementById("content");

let button = document.getElementById("addShoppingListItemButton");

button.addEventListener("click", function addToShoppingList(event) {
  let title = document.getElementById("title");
  let description = document.getElementById("description");

  let shoppingListItem = new ShoppingListItem(title.value, description.value);

  shoppingList.addItem(shoppingListItem);

  content.innerHTML = shoppingList.render();

  checkChecked();

  event.preventDefault();
});

let changeCheckedStatus = function(idx, checkbox) {
  if (!checkbox.checked === true) {
    shoppingList.items[idx].uncheck();
  } else {
    shoppingList.items[idx].check();
  }
};

function checkChecked() {
  let listArr = document.querySelectorAll("li");
  for (let i = 0; i < listArr.length; i++) {
    let checkbox = listArr[i].children[0];
    if (shoppingList.items[i].isDone) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  }
}

function removeItemButtonClicked(idx) {
  shoppingList.removeItem(shoppingList.items[idx]);
  content.innerHTML = shoppingList.render();
  checkChecked();
}
