import { Item } from './Item';
import { StandardQuality } from './StandardQuality';
import { Sellin } from './SellIn';
import { FAST_DEFAULT_QUALITY_UPDATE, STANDARD_DEFAULT_QUALITY_UPDATE } from './constants';

export class StandardItem extends Item {
  protected sellInModule: Sellin;
  protected qualityModule: StandardQuality;

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
    this.sellInModule = new Sellin(sellIn);
    this.qualityModule = new StandardQuality(quality);
    this.quality = this.qualityModule.init();
  }

  handleUpdate() {
    this.sellIn = this.sellInModule.decreaseSellIn();
    const qualityLoss = this.getQualityUpdateAccordingToSellIn();
    this.quality = this.qualityModule.ensureMinimumStandardQuality(qualityLoss);
  }

  protected getQualityUpdateAccordingToSellIn(): number {
    return this.sellInModule.isSellInDatePassed() ? FAST_DEFAULT_QUALITY_UPDATE : STANDARD_DEFAULT_QUALITY_UPDATE;
  }
}
