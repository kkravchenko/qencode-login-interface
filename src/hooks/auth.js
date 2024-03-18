import { useEffect, createContext, useContext, useState } from 'react'
import useTokenStore from '../store/tokenStore'
import useFetchData from './fetchData'

const authContext = createContext()

function useAuth() {
  const [authed, setAuthed] = useState(false)
  const getToken = useTokenStore((state) => state.getToken)

  const fetchData = useFetchData()

  useEffect(() => {
    fetchData(
      process.env.REACT_APP_API_ENDPOINT +
        process.env.REACT_APP_API_ACCESS_TOKEN,
      'POST',
      {}
    ).then((res) => {
      if (res.error === 0) {
        setAuthed(true)
      } else {
        setAuthed(false)
      }
    })
  }, [getToken, fetchData])

  return authed
}

export function AuthProvider({ children }) {
  const auth = useAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default function AuthConsumer() {
  return useContext(authContext)
}
