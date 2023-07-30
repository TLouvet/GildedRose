import { Sulfuras } from "../../app/Sulfuras";
import { GildedRose } from "../../app/gilded-rose";

describe("Sulfuras item", () => {
  const gildedRose = new GildedRose([new Sulfuras()]);

  it("should have a default sellIn of 0", () => {
    expect(gildedRose.items[0].sellIn).toBe(0);
  });

  it("should always have 80 of quality", () => {
    expect(gildedRose.items[0].quality).toBe(80);
  });

  it("should not decrease a Sulfuras item sellin on update", () => {
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
  });

  it("should not change a Sulfuras item quality on update", () => {
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});
