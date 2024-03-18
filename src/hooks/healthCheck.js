import { useEffect, useState } from 'react'

const useHealthCheck = () => {
  const [response, setResponse] = useState(true)

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_ENDPOINT +
        process.env.REACT_APP_API_HEALTH_CHECK,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => setResponse(res.ok))
  }, [])

  return response
}

export default useHealthCheck
