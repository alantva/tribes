// MUI Imports
import MuiContainer from '@material-ui/core/Container'

// Atoms Imports
import Logo from '../components/atoms/Logo'

// Molecules Imports
import LinkSignUp from '../components/molecules/LinkSignUp'

// Styled Components
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  max-width: 400px;
`

const LogoWrapper = styled.div`
  max-width: 220px;
  margin: 10px 0;
`

const ChildrenWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`

const LinkSignUpWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`
// Component
const LayoutExternal = ({ children }) => (
  <MuiContainer component="main" maxWidth="xs">
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
      <LinkSignUpWrapper>
        <LinkSignUp />
      </LinkSignUpWrapper>
    </Wrapper>
  </MuiContainer>
)

export default LayoutExternal
