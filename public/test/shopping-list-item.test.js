const expect = chai.expect;
const should = chai.should();

describe("ShoppingListItem", function() {
  it("should be a class", function() {
    expect(ShoppingListItem).to.be.a("function");

    let test = new ShoppingListItem("Test", "This is a test.");
    //Create test that checks amount of arguments passed
    expect(test instanceof ShoppingListItem).to.be.true;
    test.should.have.a.property("name");
    test.should.have.a.property("description");
    test.should.have.a.property("isDone");
  });
  // Create test to make sure isDone starts with false

  it("should have a constructor", function() {
    let testItem = new ShoppingListItem("Knives", "They cut things.");

    testItem.name.should.equal("Knives");
    testItem.description.should.equal("They cut things.");
  });
  describe("check()", function() {
    it("should be a function", function() {
      expect(check).to.be.a("function");
    });
    it("check() should turn isDone true", function() {
      var isDone = new ShoppingListItem();
      isDone.check();
      expect(isDone.isDone).to.equal(true);
    });
  });
  describe("unCheck", function() {
    it("should be a function", function() {
      var shoppingList = new ShoppingListItem();
      expect(shoppingList.unCheck()).to.be.a("function");
    });
    it("unCheck should turn the value of isDone to false", function() {
      var shoppingList = new ShoppingListItem();
      shoppingList.unCheck();
      shoppingList.isDone.should.equal(false);
    });
  });
});
