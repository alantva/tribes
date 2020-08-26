// MUI Imports
import MuiButton from '@material-ui/core/Button'

// Component
const Button = (props) => (
  <MuiButton variant="contained" color="primary" fullWidth {...props} />
)

export default React.forwardRef((props, ref) => <Button {...props} innerRef={ref} />)
