import styled from 'styled-components'

import MuiContainer from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Logo from '../components/atoms/Logo'
import LinkLogin from '../components/templates/LinkLogin'

const WhatIsYourTribe = () => (
  <MuiContainer component="main" maxWidth="xs">
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <TextWrapper>
        <Typography variant="h4">Qual a sua tribo?</Typography>
        <br />
        <Typography variant="caption">
          Para começar a usar seu perfil, primeiro nos informe sobre o que você curte.
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
  margin: 10px 0;
`

const TextWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
`

const LinkLoginWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`

export default WhatIsYourTribe
