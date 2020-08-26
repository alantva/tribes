// Styled Components
import styled from 'styled-components'

const LogoImg = styled.img`
  filter: drop-shadow(2px 4px 6px black);
  width: 100%;
`

// Component
const Logo = (props) => (
  <LogoImg alt="Logo" src="/logo.png" {...props} />
)

export default Logo
