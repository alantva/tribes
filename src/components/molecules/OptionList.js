// MUI Imports
import MuiDivider from '@material-ui/core/Divider'
import MuiList from '@material-ui/core/List'
import MuiPaper from '@material-ui/core/Paper'

// Atoms Import
import OptionListItem from '../atoms/OptionListItem'

// MUI Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  list: {
    width: '100%',
    overflow: 'auto',
    maxHeight: 300,
  }
}))

// Component
const OptionList = ({ options, onDeleteOption }) => {
  // MUI Styles
  const classes = useStyles()

  // Render
  return (
    <MuiList className={classes.list} disablePadding dense>
      <MuiPaper>
        {options.reduce((res, value, i) => {
          if (i) res.push(<MuiDivider key={`divider_${i}`} />)
          return [
            ...res,
            <OptionListItem key={`item_${i}`} value={value} onDelete={onDeleteOption} />
          ]
        }, [])}
      </MuiPaper>
    </MuiList>
  )
}

export default OptionList
