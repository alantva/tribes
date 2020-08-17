import NextLink from 'next/link'
import MuiButton from '@material-ui/core/Button'
import MuiFormGroup from '@material-ui/core/FormGroup'
import MuiTextField from '@material-ui/core/TextField'


const FormLogin = () => {
  const inputProps = {
    variant: 'outlined',
    color: 'primary'
  }
  const inputLabels = {
    email: 'EMAIL',
    password: 'SENHA',
  }
  return (
    <MuiFormGroup>
      <MuiTextField id="email" label={inputLabels.email} {...inputProps} />
      <br />
      <MuiTextField id="password" type="password" label={inputLabels.password} {...inputProps} />
      <br />
      <NextLink href="/feed">
        <MuiButton variant="contained" color="primary">Login</MuiButton>
      </NextLink>
    </MuiFormGroup>
  )
}

export default FormLogin
