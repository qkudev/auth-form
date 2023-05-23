import { LRUCache } from '@/utils/lru-cache';

// Using LRU to not to go out of memory
export const accounts = new LRUCache<Email, Password>(50);

accounts.set('test@mail.com', 'qwerty1234');
