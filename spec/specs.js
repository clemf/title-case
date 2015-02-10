describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("lowercases all non-first letters of a word", function() {
    expect(titleCase("CAT")).to.equal("Cat");
  });
});
