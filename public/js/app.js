"use strict";

let shoppingList = new ShoppingList();

let button = document.getElementById("addShoppingListItemButton");

button.addEventListener("click", function addToShoppingList(event) {
  let title = document.getElementById("title");
  let description = document.getElementById("description");

  let shoppingListItem = new ShoppingListItem(title.value, description.value);

  shoppingList.addItem(shoppingListItem);

  let listContent = shoppingList.render();
  let content = document.getElementById("content");
  content.innerHTML = listContent;

  checkChecked();

  event.preventDefault();
});

let changeCheckedStatus = function(idx, checkbox) {
  if ((checkbox.checked = true)) {
    shoppingList.items[idx].check();
  } else {
    shoppingList.items[idx].uncheck();
  }
};

function checkChecked() {
  let listArr = document.querySelectorAll("li");
  console.log(listArr);
  for (let i = 0; i < listArr.length; i++) {
    let checkbox = listArr[i].children[0];
    if (shoppingList.items[i].isDone) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  }
}
