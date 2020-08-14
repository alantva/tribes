import { makeStyles } from '@material-ui/core/styles'

import MuiButton from '@material-ui/core/Button'
import FacebookIcon from '@material-ui/icons/Facebook'

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

const FacebookButton = ({ children, ...props }) => {
  const classes = useStyles()

  return (
    <MuiButton
      variant="contained"
      className={classes.faceButton}
      fullWidth
      startIcon={<FacebookIcon />}
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default React.forwardRef((props, ref) => <FacebookButton {...props} innerRef={ref} />)
