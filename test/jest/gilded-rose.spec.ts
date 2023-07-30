import { GildedRose } from "@/gilded-rose";
import { StandardItem } from "@/StandardItem";

describe("Gilded Rose", () => {
  it("should have an item named foo", () => {
    const gildedRose = new GildedRose([new StandardItem("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});
