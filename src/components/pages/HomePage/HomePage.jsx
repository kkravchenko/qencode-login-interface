import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Header, Footer } from '../../'

export const HomePage = () => (
  <HelmetProvider>
    <Helmet>
      <title>Qencode Login Interface</title>
      <meta
        name='description'
        content='Qencode Front-End Test: Login Interface'
      ></meta>
    </Helmet>
    <Header />
    <div>
      <h1>Qencode Front-End Test: Login Interface</h1>
    </div>
    <Footer />
  </HelmetProvider>
)
