import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Input, ActionButton } from '../../shared'
import useTokenStore from '../../../store/tokenStore'
import useFetchData from '../../../hooks/fetchData'

const LoginForm = () => {
  const [showPasswordField, setShowPasswordField] = useState('false')
  const navigate = useNavigate()

  const fetchData = useFetchData()

  const setToken = useTokenStore((state) => state.setToken)

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email('Incorect field value')
      .required('Field is required'),
    password: Yup.string().min(8).required('Field is required'),
  })

  const handleOnBlur = (e, error) => {
    e.target.value.trim() && !!!error && setShowPasswordField(true)
  }

  const handleSubmit = async (values, actions) => {
    const data = {
      email: values.email,
      password: values.password,
    }
    const result = await fetchData(
      process.env.REACT_APP_API_ENDPOINT + process.env.REACT_APP_API_LOGIN,
      'POST',
      data
    )

    if (result.error === 0) {
      setToken({
        access_token: result.access_token,
        refreshToken: result.refresh_token,
        token_expire: result.token_expire,
        refresh_token_expire: result.refresh_token_expire,
      })
      navigate('/')
    } else {
      actions.setErrors({
        email: '',
        password: `Wrong e-mail or password: ${result.detail}`,
      })
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, setFieldValue }) => (
        <Form method='POST'>
          <Input
            type='text'
            value={values.email}
            label=''
            error={errors.email ? errors.email : ''}
            placeholder='Work email'
            handleOnChange={(e) => setFieldValue('email', e.target.value)}
            handleOnBlur={(e) => handleOnBlur(e, errors.email)}
          />
          {showPasswordField && (
            <>
              <Input
                type='password'
                value={values.password}
                label=''
                error={errors.password ? errors.password : ''}
                placeholder='Password'
                handleOnChange={(e) =>
                  setFieldValue('password', e.target.value)
                }
                handleOnBlur={(e) => {}}
              />
              <div className='forgot-password'>
                <Link to='/forgot-password' className='forgot-password__link'>
                  Forgot your password?
                </Link>
              </div>
            </>
          )}
          <ActionButton
            type='submit'
            className='primary'
            text='Log in to Qencode'
            handleOnClick={() => {}}
          />
          <div className='signup__text'>
            Is your company new to Qencode? <Link to=''>Sign up</Link>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
