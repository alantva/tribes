import { makeStyles } from '@material-ui/core/styles'

import MuiDivider from '@material-ui/core/Divider'
import MuiList from '@material-ui/core/List'
import MuiPaper from '@material-ui/core/Paper'

import OptionListItem from '../atoms/OptionListItem'

const useStyles = makeStyles(() => ({
  list: {
    width: '100%',
    overflow: 'auto',
    maxHeight: 300,
  }
}))

const OptionList = ({ options, onDeleteOption }) => {
  const classes = useStyles()
  return (
    <MuiList className={classes.list} disablePadding dense>
      <MuiPaper>
        {options.reduce((res, value, i) => {
          if (i) res.push(<MuiDivider key={`divider_${i}`} />)
          return [
            ...res,
            <OptionListItem {...value} key={`item_${i}`} onDelete={onDeleteOption} />
          ]
        }, [])}
      </MuiPaper>
    </MuiList>
  )
}

export default OptionList
