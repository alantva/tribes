import NextLink from 'next/link'
import MuiAppBar from '@material-ui/core/AppBar'
import MuiIconButton from '@material-ui/core/IconButton'
import MuiMenuIcon from '@material-ui/icons/Menu'
import MuiExitToAppIcon from '@material-ui/icons/ExitToApp'
import MuiToolbar from '@material-ui/core/Toolbar'
import MuiTypography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const AppBar = ({ onToggleMenu, ...props }) => {
  const classes = useStyles()

  return (
    <MuiAppBar position="fixed" className={classes.appBar} {...props}>
      <MuiToolbar>
        <MuiIconButton
          color="inherit"
          aria-label="Open Menu"
          edge="start"
          onClick={onToggleMenu}
          className={classes.menuButton}
        >
          <MuiMenuIcon />
        </MuiIconButton>
        <MuiTypography variant="h6" noWrap className={classes.title}>
          {props.title}
        </MuiTypography>
        <NextLink href="/">
          <MuiIconButton color="inherit" aria-label="Logout">
            <MuiExitToAppIcon />
          </MuiIconButton>
        </NextLink>
      </MuiToolbar>
    </MuiAppBar>
  )
}

export default AppBar
