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

  removeItem(item) {
    if (!(item instanceof ShoppingListItem)) {
      if (item == null) {
        return this.items.pop();
      }
      throw "error";
    } else if (this.items.indexOf(item) == -1) {
      throw "error";
    }
    let dex = this.items.indexOf(item);
    this.items.splice(dex, 1);
  }

  render() {
    let htmlBlock = "<ul>";
    for (let i = 0; i < this.items.length; i++) {
      htmlBlock += this.items[i].render(i);
    }
    htmlBlock += "</ul>";

    return htmlBlock;
  }
}
