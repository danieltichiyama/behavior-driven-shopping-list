class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!(item instanceof ShoppingListItem)) {
      throw "error";
    }
    this.items.push(item);
  }
}
