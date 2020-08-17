import styled from 'styled-components'
import NextLink from 'next/link'

import MuiTypography from '@material-ui/core/Typography'
import MuiButton from '@material-ui/core/Button'
import MuiArrowForwardIcon from '@material-ui/icons/ArrowForward'
import MuiArrowBackIcon from '@material-ui/icons/ArrowBack'

const ContainerWhatIsYourTribe = () => (
  <>
    <SelectionWrapper>
      <MuiTypography variant="h4">Selecione suas tribos!</MuiTypography>
      <MuiTypography variant="caption">
        Em construção
      </MuiTypography>
    </SelectionWrapper>
    <ButtonWrapper>
      <NextLink href="/signup/what-is-your-tribe">
        <MuiButton color="primary" startIcon={<MuiArrowBackIcon />}>
          VOLTAR
        </MuiButton>
      </NextLink>
      <NextLink href="/feed">
        <MuiButton color="primary" endIcon={<MuiArrowForwardIcon />}>
          CONCLUIR
        </MuiButton>
      </NextLink>
    </ButtonWrapper>
  </>
)

const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  margin: 10px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

export default ContainerWhatIsYourTribe
