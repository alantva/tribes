import NextLink from 'next/link'
import MuiDrawer from '@material-ui/core/Drawer'
import MuiList from '@material-ui/core/List'
import MuiListItem from '@material-ui/core/ListItem'
import MuiListItemAvatar from '@material-ui/core/ListItemAvatar'
import MuiListItemIcon from '@material-ui/core/ListItemIcon'
import MuiListItemText from '@material-ui/core/ListItemText'
import MuiAvatar from '@material-ui/core/Avatar'
import MuiDivider from '@material-ui/core/Divider'
import MuiSatelliteIcon from '@material-ui/icons/Satellite'
import MuiPeopleIcon from '@material-ui/icons/People'
import MuiForumIcon from '@material-ui/icons/Forum'
import MuiFlagIcon from '@material-ui/icons/Flag'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth
  },
}))

const MenuOverlay = ({ onToggleMenu, ...props }) => {
  const classes = useStyles()
  const theme = useTheme()

  const pages = [
    {
      _id: 'feed',
      href: '/feed',
      text: 'Feed',
      iconComponent: <MuiSatelliteIcon />
    },
    {
      _id: 'friends',
      href: '/friends',
      text: 'Amigos',
      iconComponent: <MuiPeopleIcon />
    },
    {
      _id: 'chat',
      href: '/chat',
      text: 'Chat',
      iconComponent: <MuiForumIcon />
    },
    {
      _id: 'notifications',
      href: '/notifications',
      text: 'Notificações',
      iconComponent: <MuiFlagIcon />
    },
  ]

  return (
    <nav className={classes.drawer}>
      <MuiDrawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={props.open}
        onClose={onToggleMenu}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
      >
        <MuiList>
          <MuiListItem button>
            <MuiListItemAvatar>
              <MuiAvatar alt="Avatar" src="/avatar.jpeg" />
            </MuiListItemAvatar>
            <MuiListItemText primary="Alan Oliveira" />
          </MuiListItem>
          <MuiDivider />
          {pages.map((item) => (
            <NextLink key={item._id} href={item.href}>
              <MuiListItem button>
                <MuiListItemIcon>
                  {item.iconComponent}
                </MuiListItemIcon>
                <MuiListItemText primary={item.text} />
              </MuiListItem>
            </NextLink>
          ))}
        </MuiList>
      </MuiDrawer>
    </nav>
  )
}

export default MenuOverlay
