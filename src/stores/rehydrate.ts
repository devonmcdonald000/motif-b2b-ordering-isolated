'use client';

import { useEffect } from 'react';
import { useExampleStore } from '@/stores/example';
import { useOrderStore } from './order';

/* This is an issue with using Zustand stores with persist in Next.js.
 * If you are not using persist, then one shouldn't need to add their store to the rehydrate component.
 * We have to rehydrate the store on the client side to make sure the store is rehydrated after a page refresh, and not on server render
 * https://github.com/pmndrs/zustand/discussions/855
 */
export function ZustandStoreRehydrate() {
  useEffect(() => {
    useExampleStore.persist.rehydrate();
    useOrderStore.persist.rehydrate();
  }, []);
  return null;
}
