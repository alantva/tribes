// Next Imports
import NextLink from 'next/link'

// MUI Imports
import MuiLink from '@material-ui/core/Link'

// Styled Components
import styled from 'styled-components'

const LinkLoginText = styled.span`
  margin-right: 5px;
`

// Component
const LinkLogin = () => (
  <>
    <LinkLoginText>Já possui uma conta?</LinkLoginText>
    <NextLink href="/">
      <MuiLink>Faça login</MuiLink>
    </NextLink>
  </>
)

export default LinkLogin
