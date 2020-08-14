import styled from 'styled-components'

const Logo = () => (
  <LogoImg alt="Logo" src="/logo.png" />
)

const LogoImg = styled.img`
  filter: drop-shadow(2px 4px 6px black);
  width: 100%;
`

export default Logo
