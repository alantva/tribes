// Next Imports
import NextLink from 'next/link'

// MUI Imports
import MuiFormGroup from '@material-ui/core/FormGroup'

// Atoms Import
import Button from '../atoms/Button'
import TextField from '../atoms/TextField'

// MUI Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

// Component
const FormLogin = () => {
  // MUI Styles
  const classes = useStyles()

  // Render
  return (
    <MuiFormGroup className={classes.root}>
      <TextField id="email" label="Email" />
      <TextField id="password" type="password" label="Senha" />
      <NextLink href="/feed">
        <Button>Login</Button>
      </NextLink>
    </MuiFormGroup>
  )
}

export default FormLogin
