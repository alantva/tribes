import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

const useStyles = makeStyles({
  link: { cursor: 'pointer' }
})

const LinkLogin = () => {
  const classes = useStyles()

  return (
    <>
      <LinkLoginText>Já possui uma conta?</LinkLoginText>
      <NextLink href="/">
        <MuiLink className={classes.link}>Faça login</MuiLink>
      </NextLink>
    </>
  )
}

const LinkLoginText = styled.span`
  margin-right: 5px;
`

export default LinkLogin
