"use client"
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ExampleStore {
  isToggled: boolean;
  message: string;
  toggle: () => void;
  setMessage: (message: string) => void;
}

export const useExampleStore = create<ExampleStore>()(persist( (set, get) => ({
  isToggled: false,
  message: '',
  toggle: () => set(state => ({ isToggled: !state.isToggled })),
  setMessage: (message: string) => set({ message })
}),{
  name: 'example-storage',
  storage: createJSONStorage(() => sessionStorage),
  skipHydration: true // We do this to avoid rehydrating the store on the server
}))
