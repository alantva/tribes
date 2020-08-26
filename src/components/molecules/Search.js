// MUI Imports
import TextField from '../atoms/TextField'
import MuiAutocomplete from '@material-ui/lab/Autocomplete'

// Component
const Search = ({ label, ...props }) => (
  <MuiAutocomplete
    {...props}
    getOptionLabel={(option) => option.description}
    renderInput={(params) => (<TextField label={label} {...params} />)}
  />
)

export default Search
