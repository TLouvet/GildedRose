import { AgedBrie } from '../app/AgedBrie';
import { Sulfuras } from '../app/Sulfuras';
import { GildedRose } from '../app//gilded-rose';
import { StandardItem } from '../app//StandardItem';
import { BackstagePass } from '../app//BackstagePass';
import { Conjured } from '../app//Conjured';

const items = [
  new StandardItem('+5 Dexterity Vest', 10, 20), //
  new AgedBrie(2, 0), //
  new StandardItem('Elixir of the Mongoose', 5, 7), //
  new Sulfuras(), //
  new Sulfuras(),
  new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 10, 49),
  new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 5, 49),
  new Conjured('Conjured Mana Cake', 3, 6),
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days; i++) {
  console.log('-------- day ' + i + ' --------');
  console.log('name, sellIn, quality');
  items.forEach((element) => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
  });
  console.log();
  gildedRose.updateQuality();
}
