import { StandardItem } from './StandardItem';
import { CONJURED_DEFAULT_QUALITY_UPDATE, CONJURED_FAST_DEGRADATION_RATE } from './constants';

export class Conjured extends StandardItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  handleUpdate(): void {
    this.sellIn = this.sellInModule.decreaseSellIn();
    const qualityLoss = this.getQualityUpdateAccordingToSellIn();
    this.quality = this.qualityModule.ensureMinimumStandardQuality(qualityLoss);
  }

  /**
   * @override
   */
  protected getQualityUpdateAccordingToSellIn(): number {
    return this.sellInModule.isSellInDatePassed() ? CONJURED_FAST_DEGRADATION_RATE : CONJURED_DEFAULT_QUALITY_UPDATE;
  }
}
