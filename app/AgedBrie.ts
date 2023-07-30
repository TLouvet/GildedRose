import { StandardItem } from './StandardItem';

export class AgedBrie extends StandardItem {
  constructor(sellIn: number, quality: number) {
    super('Aged Brie', sellIn, quality);
  }

  /**
   * @override
   */
  handleUpdate(): void {
    this.sellIn = this.sellInModule.decreaseSellIn();
    const qualityGain = this.getQualityUpdateAccordingToSellIn();
    this.quality = this.qualityModule.ensureMaximumStandardQuality(qualityGain);
  }
}
