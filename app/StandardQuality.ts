import { MAX_STANDARD_QUALITY, MIN_STANDARD_QUALITY } from './constants';

export class StandardQuality {
  constructor(private quality: number) {}

  init() {
    this.quality = this.ensureMaximumStandardQuality();
    this.quality = this.ensureMinimumStandardQuality();
    return this.quality;
  }

  ensureMinimumStandardQuality(loss: number = 0) {
    this.quality = Math.max(MIN_STANDARD_QUALITY, this.quality - loss);
    return this.quality;
  }

  ensureMaximumStandardQuality(gain: number = 0) {
    this.quality = Math.min(MAX_STANDARD_QUALITY, this.quality + gain);
    return this.quality;
  }
}
