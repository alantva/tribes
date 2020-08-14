import NextLink from 'next/link'
import MuiButton from '@material-ui/core/Button'
import MuiFormGroup from '@material-ui/core/FormGroup'
import MuiTextField from '@material-ui/core/TextField'


const FormLogin = () => (
  <MuiFormGroup>
    <MuiTextField id="email" label="Email" variant="outlined" color="primary"/>
    <br />
    <MuiTextField id="password" label="Senha" type="password" variant="outlined" color="primary" />
    <br />
    <NextLink href="/feed">
      <MuiButton variant="contained" color="primary">Login</MuiButton>
    </NextLink>
  </MuiFormGroup>
)

export default FormLogin
