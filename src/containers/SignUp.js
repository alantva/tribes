import styled from 'styled-components'

import FormSignUp from '../components/templates/FormSignUp'
import LinkLogin from '../components/templates/LinkLogin'

const ContainerSignUp = () => (
  <>
    <FormSignUp />
    <LinkLoginWrapper>
      <LinkLogin />
    </LinkLoginWrapper>
  </>
)

const LinkLoginWrapper = styled.div`
  text-align: center;
  margin: 10px 0;
`

export default ContainerSignUp
