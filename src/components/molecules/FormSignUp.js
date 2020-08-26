// Next Import
import NextLink from 'next/link'

// MUI Import
import MuiFormGroup from '@material-ui/core/FormGroup'

// Atoms Import
import FacebookButton from '../atoms/FacebookButton'
import TextField from '../atoms/TextField'
import Button from '../atoms/Button'

// MUI Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

// Styled Components
import styled from 'styled-components'

const FormSignUpButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > *:not(:first-child) {
    margin-left: 5px;
  }
`

// Component
const FormSignUp = () => {
  // MUI Styles
  const classes = useStyles()

  // Render
  return (
    <MuiFormGroup className={classes.root}>
      <TextField id="name" label="Nome" />
      <TextField id="last_name" label="Sobrenome" />
      <TextField id="username" label="Nome de Usuário" />
      <TextField id="email" label="Email" />
      <TextField id="password" type="password" label="Senha" />
      <TextField id="confirm_password" type="password" label="Confirme sua senha" />
      <FormSignUpButtonWrapper display="flex" justifyContent="space-evenly">
        <NextLink href="/signup/what-is-your-tribe">
          <Button>CADASTRAR</Button>
        </NextLink>
        <NextLink href="/">
          <FacebookButton>SIGN IN</FacebookButton>
        </NextLink>
      </FormSignUpButtonWrapper>
    </MuiFormGroup>
  )
}

export default FormSignUp
