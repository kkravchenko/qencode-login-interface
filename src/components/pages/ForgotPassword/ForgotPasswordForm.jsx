import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Input, ActionButton } from '../../shared'
import useFetchData from '../../../hooks/fetchData'

const ForgotPasswordForm = () => {
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()
  const fetchData = useFetchData()

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email('Incorect field value')
      .required('Field is required'),
  })

  const handleCancelClick = () => {
    navigate('/login')
  }

  const handleSubmit = async (values, actions) => {
    const data = {
      email: values.email,
      redirect_url: `${process.env.REACT_APP_HREF}/reset-password`,
    }
    const result = await fetchData(
      process.env.REACT_APP_API_ENDPOINT +
        process.env.REACT_APP_API_PASSWORD_RESET,
      'POST',
      data
    )

    if (result.error === 0) {
      setSuccess(result.detail)
    } else {
      actions.setErrors({
        email: 'Wrong e-mail',
      })
    }
  }

  return (
    <>
      {success ? (
        <div className='success-restore-password'>
          <div>{success}</div>
          <div>
            <Link to='/'>Go to Home page</Link>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, setFieldValue }) => (
            <Form method='POST' className='forgot-password'>
              <Input
                type='text'
                value={values.email}
                label=''
                error={errors.email ? errors.email : ''}
                placeholder='Enter your email'
                handleOnChange={(e) => setFieldValue('email', e.target.value)}
                handleOnBlur={(e) => {}}
              />
              <ActionButton
                type='submit'
                className='primary'
                text='Send'
                handleOnClick={() => {}}
              />
              <ActionButton
                type='button'
                className='secondary'
                text='Cancel'
                handleOnClick={() => handleCancelClick()}
              />
            </Form>
          )}
        </Formik>
      )}
    </>
  )
}

export default ForgotPasswordForm
