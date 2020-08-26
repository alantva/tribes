// Molecules Import
import FormSignUp from '../molecules/FormSignUp'
import LinkLogin from '../molecules/LinkLogin'

// Styled Components
import styled from 'styled-components'

const LinkLoginWrapper = styled.div`
  text-align: center;
  margin: 10px 0;
`

// Component
const TemplateSignUp = () => (
  <>
    <FormSignUp />
    <LinkLoginWrapper>
      <LinkLogin />
    </LinkLoginWrapper>
  </>
)

export default TemplateSignUp
