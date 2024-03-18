import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Input, ActionButton } from '../../shared'
import useFetchData from '../../../hooks/fetchData'

const ResetPasswordFrom = () => {
  const [success, setSuccess] = useState(false)
  let { token, secret } = useParams()

  const fetchData = useFetchData()

  const SignUpSchema = Yup.object().shape({
    password: Yup.string().min(8).required('Field is required'),
    repassword: Yup.string()
      .min(8)
      .required('Field is required')
      .test('check_password', 'Passwords do not match', (value, context) => {
        if (value !== context.parent.password) {
          return false
        }
        return true
      }),
  })

  const handleSubmit = async (values, actions) => {
    const data = {
      token,
      secret,
      password: values.password,
      password_confirm: values.repassword,
    }
    const result = await fetchData(
      process.env.REACT_APP_API_ENDPOINT +
        process.env.REACT_APP_API_SET_NEW_PASSWORD,
      'POST',
      data
    )

    if (result.error === 0) {
      setSuccess(true)
    } else {
      actions.setErrors({
        repassword: !!result.detail.msg
          ? result.detail.msg
          : 'Error during reset password',
      })
    }
  }

  return (
    <>
      {success ? (
        <div className='success-restore-password'>
          <div>Password reset success</div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={{
            password: '',
            repassword: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, setFieldValue }) => (
            <Form method='POST'>
              <Input
                type='password'
                value={values.password}
                label='Password'
                error={errors.password ? errors.password : ''}
                placeholder='Password'
                handleOnChange={(e) =>
                  setFieldValue('password', e.target.value)
                }
                handleOnBlur={(e) => {}}
              />
              <Input
                type='password'
                value={values.repassword}
                label='Confirm Password'
                error={errors.repassword ? errors.repassword : ''}
                placeholder='Password'
                handleOnChange={(e) =>
                  setFieldValue('repassword', e.target.value)
                }
                handleOnBlur={(e) => {}}
              />
              <ActionButton
                type='submit'
                className='primary'
                text='Reset Password'
                handleOnClick={() => {}}
              />
            </Form>
          )}
        </Formik>
      )}
    </>
  )
}

export default ResetPasswordFrom
