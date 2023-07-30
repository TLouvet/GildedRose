import { StandardItem } from './StandardItem';
import {
  BACKSTAGE_MEDIUM_QUALITY_DAY_MINIMUM,
  BACKSTAGE_SLOW_QUALITY_DAY_MINIMUM,
  BACKSTAGE_TIER_1_QUALITY,
  BACKSTAGE_TIER_2_QUALITY,
  BACKSTAGE_TIER_3_QUALITY,
  MIN_STANDARD_QUALITY,
} from './constants';

export class BackstagePass extends StandardItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  /**
   * @override
   */
  handleUpdate(): void {
    this.sellIn = this.sellInModule.decreaseSellIn();
    if (this.sellInModule.isSellInDatePassed()) {
      this.quality = MIN_STANDARD_QUALITY;
      return;
    }

    const qualityGain = this.getQualityUpdateAccordingToSellIn();
    this.quality = this.qualityModule.ensureMaximumStandardQuality(qualityGain);
  }

  /**
   * @override
   */
  protected getQualityUpdateAccordingToSellIn() {
    if (this.sellIn > BACKSTAGE_SLOW_QUALITY_DAY_MINIMUM) {
      return BACKSTAGE_TIER_1_QUALITY;
    } else if (this.sellIn > BACKSTAGE_MEDIUM_QUALITY_DAY_MINIMUM) {
      return BACKSTAGE_TIER_2_QUALITY;
    }

    return BACKSTAGE_TIER_3_QUALITY;
  }
}
