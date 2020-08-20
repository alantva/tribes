import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import CloseIcon from '@material-ui/icons/Close'

const OptionListItem = ({ onDelete, ...props }) => (
  <ListItem>
    <ListItemText primary={props.description} />
    <ListItemSecondaryAction>
      <IconButton
        edge="end"
        aria-label="delete"
        size="small"
        onClick={() => onDelete(props)}
      >
        <CloseIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

export default OptionListItem
