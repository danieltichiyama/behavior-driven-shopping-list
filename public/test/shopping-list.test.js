// const expect = chai.expect;
// const should = chai.should();

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
  describe("addItem", function() {
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
      expect(list.addItem(trash)).to.throw("error");
    });
  });
});
