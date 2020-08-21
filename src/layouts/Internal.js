import styled from 'styled-components'

import MuiContainer from '@material-ui/core/Container'

import AppMenu from '../components/templates/AppMenu'
import Logo from '../components/atoms/Logo'
import LinkSignUp from '../components/templates/LinkSignUp'

const LayoutInternal = ({ title, children }) => (
  <MuiContainer component="main" maxWidth="xs">
    <AppMenu title={title} />
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

export default LayoutInternal
