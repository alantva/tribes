import styled from 'styled-components'
import NextLink from 'next/link'

import MuiTypography from '@material-ui/core/Typography'
import MuiButton from '@material-ui/core/Button'
import MuiArrowForwardIcon from '@material-ui/icons/ArrowForward'

const ContainerWhatIsYourTribe = () => (
  <>
    <TextWrapper>
      <MuiTypography variant="h4">Qual a sua tribo?</MuiTypography>
      <MuiTypography variant="caption">
        Para começar a usar seu perfil, primeiro nos informe sobre o que você curte.
      </MuiTypography>
    </TextWrapper>
    <ButtonWrapper>
      <NextLink href="/signup/select-your-tribe">
        <MuiButton color="primary" endIcon={<MuiArrowForwardIcon />}>
          PRÓXIMO
        </MuiButton>
      </NextLink>
    </ButtonWrapper>
  </>
)

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  margin: 10px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`

export default ContainerWhatIsYourTribe
