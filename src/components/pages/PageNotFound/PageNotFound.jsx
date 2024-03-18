import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export const PageNotFound = () => (
  <HelmetProvider>
    <Helmet>
      <title>Error 404 | Qencode</title>
      <meta name='description' content='Something went wrong'></meta>
    </Helmet>
    <div className='pagenotfound'>
      <Link to='/'>Return to Home</Link>
    </div>
  </HelmetProvider>
)
