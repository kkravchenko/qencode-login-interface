import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useUserStore from '../../../../store/userStore'

export const GithubButton = () => {
  const setEmail = useUserStore((state) => state.setEmail)
  useEffect(() => {
    const url = window.location.href
    const newUrl = url.split('?code=')
    // window.history.pushState({}, null, newUrl[0])

    if (newUrl.length === 2) {
      const data = new FormData()
      data.append('client_id', process.env.REACT_APP_GITHUB_CLIENT_ID)
      data.append('client_secret', process.env.REACT_APP_GITHUB_CLIENT_SECRET)
      data.append('code', newUrl[1])
      data.append('redirect_uri', process.env.REACT_APP_GITHUB_REDIRECT_URI)

      fetch(
        'https://corsproxy.io/?https://github.com/login/oauth/access_token',
        {
          method: 'POST',
          body: data,
        }
      )
        .then((response) => {
          return response.text()
        })
        .then((paramsString) => {
          let params = new URLSearchParams(paramsString)
          const access_token = params.get('access_token')

          if (access_token) {
            // Request to return data of a user that has been authenticated
            fetch(`https://api.github.com/user`, {
              headers: {
                Authorization: `token ${access_token}`,
              },
            })
              .then((response) => response.json())
              .then((response) => {
                setEmail(response.email ? response.email : response.login)
              })
              .catch((error) => {
                console.log(error)
              })
          }
        })
    }
  }, [setEmail])

  return (
    <>
      <Link
        to={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GITHUB_REDIRECT_URI}`}
        className={`button github`}
      >
        <span className={`button__icon github__icon`}></span>
        <span>Github</span>
      </Link>
    </>
  )
}
