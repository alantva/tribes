import styled from 'styled-components'

import MuiContainer from '@material-ui/core/Container'

import Logo from '../components/atoms/Logo'
import FormSignUp from '../components/templates/FormSignUp'
import LinkLogin from '../components/templates/LinkLogin'

const SignUp = () => (
  <MuiContainer component="main" maxWidth="xs">
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <FormSignUpWrapper>
        <FormSignUp />
      </FormSignUpWrapper>
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
  max-width: 100px;
`

const FormSignUpWrapper = styled.div`
  width: 100%;
`

const LinkLoginWrapper = styled.div`
  text-align: center;
`

export default SignUp
