import { Helmet, HelmetProvider } from 'react-helmet-async'

export const ProtectedPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Protected page | Qencode</title>
        <meta
          name='description'
          content='Qencode Front-End Test: Protected page'
        ></meta>
      </Helmet>
    </HelmetProvider>
  )
}
