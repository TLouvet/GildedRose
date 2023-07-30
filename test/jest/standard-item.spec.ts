import { StandardItem } from "@/StandardItem";

describe("standard Item", () => {
  it("should create an item with a base quality of at least the Minimum quality", () => {
    const item = new StandardItem("Name", 5, -1);
    expect(item.quality).toBe(0);
  });

  it("should create an item with the maximum possible quality", () => {
    const item = new StandardItem("Name", 5, 51);
    expect(item.quality).toBe(50);
  });

  it("should handle update", () => {
    const item = new StandardItem("Name", -1, 51);
    item.handleUpdate();
    expect(item.quality).toBe(48);
    expect(item.sellIn).toBe(-2);
  });
});
