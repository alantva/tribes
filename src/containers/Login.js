import styled from 'styled-components'

import MuiContainer from '@material-ui/core/Container'

import Logo from '../components/atoms/Logo'
import FormLogin from '../components/templates/FormLogin'
import LinkSignUp from '../components/templates/LinkSignUp'

const Login = () => (
  <MuiContainer component="main" maxWidth="xs">
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <LoginWrapper>
        <FormLogin />
      </LoginWrapper>
      <LinkSignUpWrapper>
        <LinkSignUp />
      </LinkSignUpWrapper>
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

const LoginWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

const LinkSignUpWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`

export default Login
