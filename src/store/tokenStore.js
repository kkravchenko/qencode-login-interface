import { create } from 'zustand'

const useTokenStore = create()((set, get) => ({
  token: {},
  setToken: (token) =>
    set((state) => ({
      token,
    })),
  getToken: () => get().token,
}))

export default useTokenStore
