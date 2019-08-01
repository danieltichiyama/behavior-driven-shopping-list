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
  });

  it("should have a constructor", function() {
    let testItem = new ShoppingListItem("Knives", "They cut things.");

    testItem.name.should.equal("Knives");
    testItem.description.should.equal("They cut things.");
  });
});
