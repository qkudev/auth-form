type TKey = string | symbol | number;

/**
 * Least recently used cache
 * @see https://en.wikipedia.org/wiki/Cache_replacement_policies
 */
export class LRUCache<K extends TKey, V> {
  private values: Map<TKey, V> = new Map<K, V>();

  public readonly capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  /**
   * Get value by key
   * @param {K} key
   * @returns {V | undefined} value or `undefined`
   */
  public get(key: K): V | undefined {
    const hasKey = this.values.has(key);

    if (hasKey) {
      const entry = this.values.get(key)!;
      this.values.delete(key);
      this.values.set(key, entry);

      return entry;
    }

    return undefined;
  }

  /**
   * Set value for key. If cache is full, it will remove least used key
   * @param {K} key
   */
  public set(key: K, value: V) {
    if (this.values.has(key)) {
      this.values.delete(key);
    }

    if (this.values.size >= this.capacity) {
      const keysIter = this.values.keys();
      const next = keysIter.next();
      const keyToDelete = next.value;

      this.values.delete(keyToDelete);
    }

    this.values.set(key, value);
  }

  /**
   * Checks for key in cache. Won't affect key usage, e.g. key won't be "recently used"
   * @param {K} key
   * @returns {boolean} `boolean`
   */
  public has(key: K): boolean {
    return this.values.has(key);
  }
}
