// MUI Imports
import MuiButton from '@material-ui/core/Button'
import MuiFacebookIcon from '@material-ui/icons/Facebook'

// MUI Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  faceButton: {
    backgroundColor: '#1877f2',
    color: '#fff',
    "&:hover, &:focus, &:active": {
      backgroundColor: '#1877f2',
      filter: 'contrast(0.5)',
    }
  }
})

// Component
const FacebookButton = (props) => {
  // MUI Styles
  const classes = useStyles()
  
  // Render
  return (
    <MuiButton
      variant="contained"
      className={classes.faceButton}
      fullWidth
      startIcon={<MuiFacebookIcon />}
      {...props}
    />
  )
}

export default React.forwardRef((props, ref) => <FacebookButton {...props} innerRef={ref} />)
