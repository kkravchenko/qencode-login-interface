import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  HomePage,
  Login,
  ForgotPassword,
  ResetPassword,
  ProtectedPage,
  RefreshToken,
  PageNotFound,
} from './components'
import { Layout } from './components/shared'
import { AuthWrapper } from './components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route
            path='/refresh-token'
            element={
              <AuthWrapper>
                <RefreshToken />
              </AuthWrapper>
            }
          />
          <Route
            path='/protected'
            element={
              <AuthWrapper>
                <ProtectedPage />
              </AuthWrapper>
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
