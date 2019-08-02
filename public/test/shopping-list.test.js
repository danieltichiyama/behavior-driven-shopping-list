describe("shoppingList", function() {
  it("should be a class", function() {
    expect(ShoppingList).to.be.a("function");
  });
  it("should have a property named items", function() {
    var bagel = new ShoppingList();
    bagel.items.should.be.a("array");
  });
  it("ShoppingList items is an empty Array", function() {
    var bagel = new ShoppingList();
    expect(bagel.items).to.be.empty;
  });

  describe("addItem()", function() {
    var list = new ShoppingList();
    var shop = new ShoppingListItem("bottle", "holds liquids");
    it("should be a function", function() {
      expect(list.addItem).to.be.a("function");
    });
    it("should take in an argument of ShoppingListItem", function() {
      list.addItem(shop);
      expect(list.items).to.include(shop);
    });
    it("should throw an error if anything else is passed as an argument", function() {
      let trash = "trash";
      expect(list.addItem.bind(list, trash)).to.throw("error");
    });
  });

  describe("removeItem()", function() {
    var list = new ShoppingList();
    var shop = new ShoppingListItem("can", "cannot...");
    var apple = new ShoppingListItem(
      "apple",
      "one a day keeps the dentist away."
    );
    var torch = new ShoppingListItem("torch", "light the way mutha fucka.");

    class OtherStuff {
      constructor(name, description) {
        this.name = name;
        this.description = description;
      }
    }
    var otherStuff = new OtherStuff("Random crap", "This is random crap");

    afterEach(function() {
      list.items = [];
    });

    it("should be a function", function() {
      expect(list.removeItem).to.be.a("function");
    });

    it("should take an argument that is an instance of ShoppingListItem", function() {
      expect(list.removeItem.bind(list, otherStuff)).to.throw("error");
    });

    it("should throw an error if the argument passed through is not in the shopping list", function() {
      expect(list.removeItem.bind(list, shop)).to.throw("error");
    });

    it("should remove a ShoppingListItem from the items array", function() {
      list.addItem(shop);
      list.addItem(apple);
      list.addItem(torch);

      list.removeItem(shop);
      list.removeItem(torch);

      list.items.should.not.contain(shop);
      list.items.should.not.contain(torch);
      list.items.should.contain(apple);
    });

    it("should pop the last item if no argument is passed into removeItem", function() {
      list.addItem(shop);
      list.addItem(apple);
      list.addItem(torch);

      list.removeItem();
      list.items.should.not.contain(torch);
    });
  });
  describe("render()", function() {
    var result = new ShoppingList();
    it("should be a function", function() {
      ShoppingList.render.should.be.a("function");
    });
    it("should return a string", function() {
      expect(result.render()).to.be.a("string");
    });
    it("should concatenate the result", function() {
      var shop = new ShoppingListItem("can", "cannot...");
      var apple = new ShoppingListItem(
        "apple",
        "one a day keeps the dentist away."
      );
      var torch = new ShoppingListItem("torch", "light the way mutha fucka.");

      result.addItem(shop);
      result.addItem(apple);
      result.addItem(torch);
      expect(result.render()).to.equal(
        `<ul>${shop.render()}${apple.render()}${torch.render()}</ul>`
      );
    });
  });
});
