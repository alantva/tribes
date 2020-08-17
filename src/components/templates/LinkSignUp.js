import styled from 'styled-components'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

const LinkSignUp = () => (
  <>
    <LinkSignUpText>Ainda não possui uma conta?</LinkSignUpText>
    <NextLink href="/signup">
      <MuiLink>Cadastre-se</MuiLink>
    </NextLink>
  </>
)

const LinkSignUpText = styled.span`
  margin-right: 5px;
`

export default LinkSignUp
