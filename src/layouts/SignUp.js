import styled from 'styled-components'

import MuiContainer from '@material-ui/core/Container'

import Logo from '../components/atoms/Logo'
import LinkLogin from '../components/templates/LinkLogin'

const SignUp = ({ children }) => (
  <MuiContainer component="main" maxWidth="xs">
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
      <LinkLoginWrapper>
        <LinkLogin />
      </LinkLoginWrapper>
    </Wrapper>
  </MuiContainer>
)

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

const LinkLoginWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`

export default SignUp
