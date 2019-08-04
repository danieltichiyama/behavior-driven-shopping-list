"use strict";

class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }

  check() {
    this.isDone = true;
  }

  unCheck() {
    this.isDone = false;
  }

  render(idx) {
    return `<li class = "completed_${
      this.isDone
    }"><input type="checkbox" class="checkbox" onchange = "changeCheckedStatus(${idx},this)"/><span>${
      this.name
    }</span> <span>${
      this.description
    }</span><button  onclick = "removeItemButtonClicked (${idx})">X</button></li>`;
  }
}
