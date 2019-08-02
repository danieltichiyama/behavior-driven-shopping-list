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
  render(name, description, isDone) {
    return `<li class = "completed_${this.isDone}"><span>${
      this.name
    }</span> <span>${this.description}</span></li>`;
  }
}
