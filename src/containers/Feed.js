import styled from 'styled-components'

import MuiContainer from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Logo from '../components/atoms/Logo'
import LinkLogin from '../components/templates/LinkLogin'

const Feed = () => (
  <MuiContainer component="main" maxWidth="xs">
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <TextWrapper>
        <Typography variant="h4">Feed</Typography>
        <br />
        <Typography variant="caption">
          Em construção
        </Typography>
      </TextWrapper>
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
`

const TextWrapper = styled.div`
  text-align: center;
  width: 100%;
`

const LinkLoginWrapper = styled.div`
  text-align: center;
`

export default Feed
