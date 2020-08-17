import styled from 'styled-components'

import NextLink from 'next/link'
import MuiButton from '@material-ui/core/Button'
import MuiFormGroup from '@material-ui/core/FormGroup'
import MuiTextField from '@material-ui/core/TextField'
import FacebookButton from '../atoms/FacebookButton'

const FormSignUp = () => {
  const inputProps = {
    variant: 'outlined',
    color: 'primary'
  }
  const inputLabels = {
    name: 'NOME',
    last_name: 'SOBRENOME',
    username: 'NOME DE USUÁRIO',
    email: 'EMAIL',
    password: 'SENHA',
    confirm_password: 'DIGITE SUA SENHA NOVAMENTE'
  }
  return (
    <MuiFormGroup>
      <MuiTextField id="name" label={inputLabels.name} {...inputProps} />
      <br />
      <MuiTextField id="last_name" label={inputLabels.last_name} {...inputProps} />
      <br />
      <MuiTextField id="username" label={inputLabels.username} {...inputProps} />
      <br />
      <MuiTextField id="email" label={inputLabels.email} {...inputProps} />
      <br />
      <MuiTextField id="password" type="password" label={inputLabels.password} {...inputProps} />
      <br />
      <MuiTextField id="confirm_password" type="password" label={inputLabels.confirm_password} {...inputProps} />
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
}

const FormSignUpButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > *:not(:first-child) {
    margin-left: 5px;
  }
`

export default FormSignUp
