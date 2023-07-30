import { Conjured } from '@/Conjured';

describe('Conjured item', () => {
  it('should degrade by its given value', () => {
    const conjured = new Conjured('Item', 5, 10);
    conjured.handleUpdate();

    expect(conjured.quality).toBe(8);
  });

  it('should degrade according to post sellin value', () => {
    const conjured = new Conjured('Item', -1, 10);
    conjured.handleUpdate();

    expect(conjured.quality).toBe(6);
  });
});
