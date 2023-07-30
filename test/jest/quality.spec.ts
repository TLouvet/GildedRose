import { StandardQuality } from '@/StandardQuality';

describe('Quality class', () => {
  it('should return MIN quality if the provided quality is too low', () => {
    const quality = new StandardQuality(-1);
    expect(quality.ensureMinimumStandardQuality()).toBe(0);
  });

  it('should return the substracted quality if the provided quality is normal', () => {
    const quality = new StandardQuality(20);
    expect(quality.ensureMinimumStandardQuality(15)).toBe(5);
  });

  it('should return MAX quality if the provided quality is too high', () => {
    const quality = new StandardQuality(55);
    expect(quality.ensureMaximumStandardQuality(55)).toBe(50);
  });

  it('should return the added quality if the provided quality fits', () => {
    const quality = new StandardQuality(0);
    expect(quality.ensureMaximumStandardQuality(20)).toBe(20);
  });
});
