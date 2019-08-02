const expect = chai.expect;
const should = chai.should();

describe("ShoppingListItem", function() {
  it("should be a class", function() {
    expect(ShoppingListItem).to.be.a("function");

    let test = new ShoppingListItem("Test", "This is a test.");

    expect(test instanceof ShoppingListItem).to.be.true;
    test.should.have.a.property("name");
    test.should.have.a.property("description");
    test.should.have.a.property("isDone");
    test.isDone.should.equal(false);
  });

  it("should have a constructor", function() {
    let testItem = new ShoppingListItem("Knives", "They cut things.");

    testItem.name.should.equal("Knives");
    testItem.description.should.equal("They cut things.");
  });
  describe("check()", function() {
    var isDone = new ShoppingListItem();

    it("should be a function", function() {
      expect(isDone.check).to.be.a("function");
    });
    it("check() should turn isDone true", function() {
      isDone.check();
      expect(isDone.isDone).to.equal(true);
    });
  });
  describe("unCheck()", function() {
    it("should be a function", function() {
      var shoppingList = new ShoppingListItem();
      expect(shoppingList.unCheck).to.be.a("function");
    });
    it("unCheck should turn the value of isDone to false", function() {
      var shoppingList = new ShoppingListItem();
      shoppingList.unCheck();
      shoppingList.isDone.should.equal(false);
    });
  });

  describe("render()", function() {
    var avocado = new ShoppingListItem("Avocado", "Must be eaten immediately.");

    it("should be a function", function() {
      expect(avocado.render).to.be.a("function");
    });

    it("should return a string", function() {
      var result = avocado.render();
      expect(result).to.be.a("string");
    });

    it("should contain a list element", function() {
      var result = avocado.render();
      expect(result).to.equal(
        `<li class = "completed_${avocado.isDone}"><span>${
          avocado.name
        }</span> <span>${avocado.description}</span></li>`
      );
    });
  });
});
