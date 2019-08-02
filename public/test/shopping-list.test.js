// const expect = chai.expect;
// const should = chai.should();

describe("shoppingList", function() {
  it("should be a class", function() {
    expect(shoppingList).to.be.a("function");
  });
  it('should have a property named items', function () {
      var bagel = new shoppingList('Bagel');
      bagel.item.should.equal('Bagel')
  })
});
