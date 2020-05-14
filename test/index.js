const expect = require("chai").expect;
const { div, counter } = require("../index");

describe("Index", () => {
  describe("div", () => {
    it("should return a message you cannot divide 0 by 0", () => {
      const result = div(0, 0);
      expect(result).to.equal("you cannot divide 0 by 0");
    });

    it("should return 1 when 1/1", () => {
      const result = div(1, 1);
      expect(result).to.equal(1);
    });
  });

  describe("counter", () => {
    let count;
    beforeEach(() => {
      count = counter();
    });

    it("should return a closure", () => {
      expect(count).to.be.a("function");
    });

    it("should return 1 when counting for the first time", () => {
      const result = count();
      expect(result).to.equal(1);
    });

    it("should return 3 when counting for the third time", () => {
      count();
      count();
      const result = count();
      expect(result).to.equal(3);
    });
  });
});
