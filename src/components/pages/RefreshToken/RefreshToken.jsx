import { useEffect, useState } from 'react'
import { Header, Footer } from '../../'
import useTokenStore from '../../../store/tokenStore'
import useHealthCheck from '../../../hooks/healthCheck'
import useFetchData from '../../../hooks/fetchData'

export const RefreshToken = () => {
  const [result, setResult] = useState(null)
  const fetchData = useFetchData()
  const response = useHealthCheck()

  const getToken = useTokenStore((state) => state.getToken)
  const setToken = useTokenStore((state) => state.setToken)

  useEffect(() => {
    const data = {
      refresh_token: getToken().refreshToken,
    }

    fetchData(
      process.env.REACT_APP_API_ENDPOINT +
        process.env.REACT_APP_API_REFRESH_TOKEN,
      'POST',
      data
    ).then((res) => {
      if (res.error === 0) {
        setResult(true)

        setToken({
          access_token: res.access_token,
          refreshToken: res.refresh_token,
          token_expire: res.token_expire,
          refresh_token_expire: res.refresh_token_expire,
        })
      } else {
        setResult(false)
      }
    })
  }, [fetchData, getToken, setToken])

  return (
    <>
      <Header />
      <div className='refresh-token'>
        {!response ? (
          <div>Qencode auth host does not work</div>
        ) : (
          <>
            {result !== null && result
              ? 'Token refreshed success'
              : 'Error while token refreshed'}
          </>
        )}
      </div>
      <Footer />
    </>
  )
}
