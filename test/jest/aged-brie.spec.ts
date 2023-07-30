import { AgedBrie } from '@/AgedBrie';
import { STANDARD_DEFAULT_QUALITY_UPDATE } from '@/constants';

describe('Aged Brie Item', () => {
  it('should create an aged brie with the provided values', () => {
    const brie = new AgedBrie(5, 10);
    expect(brie.name).toBe('Aged Brie');
    expect(brie.sellIn).toBe(5);
    expect(brie.quality).toBe(10);
  });

  it('should handleUpdate', () => {
    const brie = new AgedBrie(5, 10);
    brie.handleUpdate();

    expect(brie.quality).toBe(10 + STANDARD_DEFAULT_QUALITY_UPDATE);
    expect(brie.sellIn).toBe(4);
  });
});
