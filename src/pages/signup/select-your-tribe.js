import LayoutSignUp from '../../layouts/SignUp'
import TemplateSelectYourTribe from '../../components/templates/SelectYourTribe'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTribes } from '../../store/actions/tribes.action'

const PageSelectYourTribe = (props) => {
  React.useEffect(() => {
    props.fetchTribes()
  }, [])
  
  return (
    <LayoutSignUp>
      <TemplateSelectYourTribe tribes={props.tribes} />
    </LayoutSignUp>
  )
}

const mapStateToProps = (state) => ({
  tribes: state.tribes.tribes
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTribes
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PageSelectYourTribe)
