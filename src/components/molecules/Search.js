
import MuiTextField from '@material-ui/core/TextField'
import MuiAutocomplete from '@material-ui/lab/Autocomplete'

const Search = ({ placeholder, ...props }) => (
  <MuiAutocomplete
    {...props}
    getOptionLabel={(option) => option.description}
    renderInput={
      (params) => (
        <MuiTextField {...params} label={placeholder} variant="outlined" />
      )
    }
  />
)

export default Search
