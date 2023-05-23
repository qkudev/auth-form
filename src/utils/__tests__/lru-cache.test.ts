import { LRUCache } from '../lru-cache';

describe('LRUCache', () => {
  it('works', () => {
    const cache = new LRUCache<string, number>(2);

    expect(cache.capacity).toEqual(2);
    expect(cache.get('2')).toEqual(undefined);

    cache.set('2', 6);
    cache.get('1');
    cache.set('1', 5);
    cache.set('1', 2);
    expect(cache.get('1')).toEqual(2);
    expect(cache.get('2')).toEqual(6);
  });

  it('will drop value out by capacity', () => {
    const cache = new LRUCache<string, number>(2);
    cache.set('2', 6);
    cache.set('1', 5);
    cache.set('3', 2);

    expect(cache.get('3')).toEqual(2);
    expect(cache.get('1')).toEqual(5);
    expect(cache.get('2')).toEqual(undefined);
  });

  it('will lift up key usage by "get" method and drop other one', () => {
    const cache = new LRUCache<string, number>(2);
    cache.set('2', 6);
    cache.set('1', 5);
    cache.get('2');
    cache.set('3', 2);

    expect(cache.get('2')).toEqual(6);
    expect(cache.get('3')).toEqual(2);
    expect(cache.get('1')).toEqual(undefined);
  });
});
