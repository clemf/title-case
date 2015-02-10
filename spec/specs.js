describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("lowercases all non-first letters of a word", function() {
    expect(titleCase("CAT")).to.equal("Cat");
  });

  it("parses multiple word input", function() {
    expect(titleCase("CaT meOw")).to.equal("Cat Meow");
  });

  it("does not capitalize words like and or the", function() {
    expect(titleCase("cat the meow")).to.equal("Cat the Meow");
  });

  it("makes sure the first letter is always capitalized", function() {
    expect(titleCase("a cat")).to.equal("A Cat");
  });

  it("makes sure the first letter of the last word is capitalized", function() {
    expect(titleCase("Cat of")).to.equal("Cat Of");
  });
});
