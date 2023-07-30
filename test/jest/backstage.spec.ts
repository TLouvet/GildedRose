import { BackstagePass } from '@/BackstagePass';

describe('Backstage Item', () => {
  it('should create a BackstagePass', () => {
    const pass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 12, 10);
    expect(pass.quality).toBe(10);
    expect(pass.sellIn).toBe(12);
  });

  it('should update quality by 1 if sellIn > 10', () => {
    const pass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 12, 10);
    pass.handleUpdate();

    expect(pass.quality).toBe(11);
  });

  it('should update quality by 2 if sellIn > 5', () => {
    const pass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 7, 10);
    pass.handleUpdate();

    expect(pass.quality).toBe(12);
  });

  it('should update quality by 3 if sellIn <= 5 ', () => {
    const pass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 3, 10);
    pass.handleUpdate();

    expect(pass.quality).toBe(13);
  });

  it('should drop quality to 0 if sellin < 0', () => {
    const pass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', -1, 10);
    pass.handleUpdate();

    expect(pass.quality).toBe(0);
  });

  it('should lower the sellin on update', () => {
    const pass = new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 5, 10);

    pass.handleUpdate();

    expect(pass.sellIn).toBe(4);
  });
});
