// Next Imports
import NextLink from 'next/link'

// MUI Imports
import MuiLink from '@material-ui/core/Link'

// Styled Components
import styled from 'styled-components'

const LinkSignUpText = styled.span`
  margin-right: 5px;
`

// Component
const LinkSignUp = () => (
  <>
    <LinkSignUpText>Ainda não possui uma conta?</LinkSignUpText>
    <NextLink href="/signup">
      <MuiLink>Cadastre-se</MuiLink>
    </NextLink>
  </>
)

export default LinkSignUp
