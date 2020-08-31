import LayoutInternal from '../layouts/Internal'
import TemplateFeed from '../components/templates/Feed'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFeeds } from '../store/actions/feeds.action'

const PageFeed = (props) => {
  React.useEffect(() => {
    props.fetchFeeds()
  }, [])

  return (
    <LayoutInternal title="Feed">
      <TemplateFeed feeds={props.feeds} />
    </LayoutInternal>
  )
}

const mapStateToProps = (state) => ({
  feeds: state.feeds.feeds
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFeeds
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PageFeed)
