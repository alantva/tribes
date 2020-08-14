import styled from 'styled-components'

import NextLink from 'next/link'
import MuiButton from '@material-ui/core/Button'
import MuiFormGroup from '@material-ui/core/FormGroup'
import MuiTextField from '@material-ui/core/TextField'
import FacebookButton from '../atoms/FacebookButton'

// @@TODO: Icon Button

const FormSignUp = () => (
  <MuiFormGroup>
    <MuiTextField id="name" label="NOME" variant="outlined" color="primary"/>
    <br />
    <MuiTextField id="last_name" label="SOBRENOME" variant="outlined" color="primary"/>
    <br />
    <MuiTextField id="username" label="NOME DE USUÁRIO" variant="outlined" color="primary"/>
    <br />
    <MuiTextField id="email" label="EMAIL" variant="outlined" color="primary"/>
    <br />
    <MuiTextField
      id="password"
      label="SENHA"
      type="password"
      variant="outlined"
      color="primary"
    />
    <br />
    <MuiTextField
      id="confirm_password"
      label="DIGITE SUA SENHA NOVAMENTE"
      type="password"
      variant="outlined"
      color="primary"
    />
    <br />
    <FormSignUpButtonWrapper display="flex" justifyContent="space-evenly">
      <NextLink href="/signup/what-is-your-tribe">
        <MuiButton variant="contained" color="primary" fullWidth>CADASTRAR</MuiButton>
      </NextLink>
      <NextLink href="/">
        <FacebookButton>SIGN IN</FacebookButton>
      </NextLink>
    </FormSignUpButtonWrapper>
  </MuiFormGroup>
)

const FormSignUpButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > *:not(:first-child) {
    margin-left: 5px;
  }
`

export default FormSignUp
