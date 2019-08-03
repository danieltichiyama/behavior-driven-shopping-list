let shoppingList = new ShoppingList();

let button = document.getElementById("addShoppingListItemButton");

button.addEventListener("click", addToShoppingList);

function addToShoppingList(event) {
  let title = document.getElementById("title");
  let description = document.getElementById("description");

  let shoppingListItem = new ShoppingListItem(title.value, description.value);

  shoppingList.addItem(shoppingListItem);

  let listContent = shoppingList.render();
  let content = document.getElementById("content");
  content.innerHTML = listContent;
}
