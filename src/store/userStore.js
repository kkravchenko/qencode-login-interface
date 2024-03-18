import { create } from 'zustand'

const useUserStore = create()((set, get) => ({
  email: '',
  setEmail: (email) =>
    set((state) => ({
      email,
    })),
  getEmail: () => get().email,
}))

export default useUserStore
