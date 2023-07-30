import { Item } from './Item';
import { LegendaryItem } from './LegendaryItem';
import { StandardItem } from './StandardItem';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.handleItemUpdate(item);
    }

    return this.items;
  }

  private handleItemUpdate(item: Item) {
    if (item instanceof LegendaryItem) {
      return;
    }

    this.handleStandardItemUpdate(item as StandardItem);
  }

  private handleStandardItemUpdate(item: StandardItem) {
    item.handleUpdate();
  }
}
