import NextLink from 'next/link'
import MuiButton from '@material-ui/core/Button'
import MuiFormGroup from '@material-ui/core/FormGroup'
import MuiTextField from '@material-ui/core/TextField'

const FormLogin = () => (
  <MuiFormGroup>
    <MuiTextField
      id="email"
      label="EMAIL"
      variant="outlined"
      color="primary"
    />
    <br />
    <MuiTextField
      id="password"
      type="password"
      label="SENHA"
      variant="outlined"
      color="primary"
    />
    <br />
    <NextLink href="/feed">
      <MuiButton variant="contained" color="primary">Login</MuiButton>
    </NextLink>
  </MuiFormGroup>
)

export default FormLogin
