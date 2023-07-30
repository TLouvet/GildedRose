import { Sellin } from "@/SellIn";

describe("SellIn Module", () => {
  it("should decrease the sellin", () => {
    const sellin = new Sellin(10);
    expect(sellin.decreaseSellIn()).toBe(9);
  });

  it("should tell if a sellin is < 0", () => {
    const sellIn = new Sellin(10);
    expect(sellIn.isSellInDatePassed()).toBe(false);
  });

  it("isSellInDatePassed should return true if a sellin is < 0", () => {
    const sellIn = new Sellin(-10);
    expect(sellIn.isSellInDatePassed()).toBe(true);
  });
});
