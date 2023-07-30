export class Sellin {
  constructor(private sellIn: number) {}

  decreaseSellIn() {
    this.sellIn -= 1;
    return this.sellIn;
  }

  isSellInDatePassed() {
    return this.sellIn < 0;
  }
}
