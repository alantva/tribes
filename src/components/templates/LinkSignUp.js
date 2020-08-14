import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

const useStyles = makeStyles({
  link: { cursor: 'pointer' }
})

const LinkSignUp = () => {
  const classes = useStyles()

  return (
    <>
      <LinkSignUpText>Ainda não possui uma conta?</LinkSignUpText>
      <NextLink href="/signup">
        <MuiLink className={classes.link}>Cadastre-se</MuiLink>
      </NextLink>
    </>
  )
}

const LinkSignUpText = styled.span`
  margin-right: 5px;
`

export default LinkSignUp
