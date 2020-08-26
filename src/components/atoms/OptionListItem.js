// MUI Imports
import MuiListItem from '@material-ui/core/ListItem'
import MuiIconButton from '@material-ui/core/IconButton'
import MuiListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import MuiListItemText from '@material-ui/core/ListItemText'
import MuiCloseIcon from '@material-ui/icons/Close'

// Component
const OptionListItem = ({ value, onDelete }) => (
  <MuiListItem>
    <MuiListItemText primary={value.description} />
    <MuiListItemSecondaryAction>
      <MuiIconButton
        edge="end"
        aria-label="delete"
        size="small"
        onClick={() => onDelete(value)}
      >
        <MuiCloseIcon />
      </MuiIconButton>
    </MuiListItemSecondaryAction>
  </MuiListItem>
)

export default OptionListItem
