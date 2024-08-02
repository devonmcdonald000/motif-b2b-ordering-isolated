"use client"
import { Item, Orders } from '@/types/Order';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface OrderStore {
  order: Orders;
  setOrder: (order: Orders) => void;
  updateItem: ( item: Item ) => void;
  removeItem: ( itemId: string ) => void;
}

export const useOrderStore = create<OrderStore>()(persist( (set, get) => ({
  order: [],
  setOrder: (order: Orders) => set({ order }),
  updateItem: ( item: Item ) => {
    const updateOrders = get().order
    const currentItemIndex = updateOrders.findIndex( orderItem => orderItem.id === item.id )
    if ( currentItemIndex !== -1 ) {
      updateOrders[ currentItemIndex ] = Object.assign({}, item )
    } else updateOrders.push( item )

    console.log( updateOrders)
    set({ order: [ ...updateOrders ] })
  },
  removeItem: ( itemId: string ) => {
    const updateOrders = get().order
    const currentItemIndex = updateOrders.findIndex( orderItem => orderItem.id === itemId )
    if ( currentItemIndex !== -1 ) {
      updateOrders.splice( currentItemIndex, 1 )
      set({ order: [ ...updateOrders ] })
    }
  }
}),{
  name: 'order-storage',
  storage: createJSONStorage(() => sessionStorage),
  skipHydration: true // We do this to avoid rehydrating the store on the server
}))