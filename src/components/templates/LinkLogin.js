import styled from 'styled-components'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

const LinkLogin = () => (
  <>
    <LinkLoginText>Já possui uma conta?</LinkLoginText>
    <NextLink href="/">
      <MuiLink>Faça login</MuiLink>
    </NextLink>
  </>
)

const LinkLoginText = styled.span`
  margin-right: 5px;
`

export default LinkLogin
