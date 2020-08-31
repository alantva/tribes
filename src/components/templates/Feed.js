// MUI Imports
import MuiGrid from '@material-ui/core/Grid'

// Molecules Imports
import Topic from '../molecules/Topic'

// Component
const TemplateFeed = (props) => (
  <>
    <MuiGrid container spacing={2}>
      {props.feeds.reduce((res, value, i) => [
        ...res,
        <MuiGrid key={`MuiGridItemTemplateFeed_${i}`} item xs={12} sm={6} md={4}>
          <Topic {...value} />
        </MuiGrid>
      ], [])} 
    </MuiGrid>
  </>
)

export default TemplateFeed
