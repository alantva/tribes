// React Imports
import { useEffect, useState } from 'react'

// Next Imports
import NextLink from 'next/link'

// MUI Imports
import MuiButton from '@material-ui/core/Button'
import MuiArrowForwardIcon from '@material-ui/icons/ArrowForward'
import MuiArrowBackIcon from '@material-ui/icons/ArrowBack'

// Molecules Imports
import Search from '../molecules/Search'
import OptionList from '../molecules/OptionList'

// Helpers Imports
import sortOptions from '../../helpers/sortOptions'

// Styled Components
import styled from 'styled-components'

const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 400px;
  margin: 10px 0;
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

// Component
const TemplateSelectYourTribe = (props) => {
  // State
  const [searchValue, setSearchValue] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [allOptions, setAllOptions] = useState(props.tribes)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    setAllOptions(props.tribes)
  }, [props.tribes])

  useEffect(() => {
    setSelectedOptions([])
    setSuggestions(sortOptions(allOptions))
  }, [allOptions])
  
  // Methods
  const handleSearchChange = (event, value, reason) => {
    if (reason === 'select-option') {
      const nSelectedOptions = [...selectedOptions, value]
      setSelectedOptions(sortOptions(nSelectedOptions))
      const nSuggestions = suggestions.filter(suggestion => suggestion._id !== value._id)
      setSuggestions(sortOptions(nSuggestions))
    }
    setSearchValue(null)
    setInputValue('')
  }

  const handleDeleteOption = (value) => {
    const nSelectedOptions = selectedOptions.filter(option => option._id !== value._id)
    setSelectedOptions(sortOptions(nSelectedOptions))
    const nSuggestions = [...suggestions, value]
    setSuggestions(sortOptions(nSuggestions))
  }

  // Render
  return (
    <>
      <SelectionWrapper>
        <Search
          value={searchValue}
          inputValue={inputValue}
          options={suggestions}
          label="Faça uma busca..."
          noOptionsText="Não há tribos para selecionar..."
          fullWidth
          blurOnSelect
          onChange={handleSearchChange}
          onInputChange={(event, value) => setInputValue(value)}
        />
        <OptionList options={selectedOptions} onDeleteOption={handleDeleteOption} />
      </SelectionWrapper>
      <ButtonWrapper>
        <NextLink href="/signup/what-is-your-tribe">
          <MuiButton color="primary" startIcon={<MuiArrowBackIcon />}>
            VOLTAR
          </MuiButton>
        </NextLink>
        <NextLink href="/feed">
          <MuiButton color="primary" endIcon={<MuiArrowForwardIcon />}>
            CONCLUIR
          </MuiButton>
        </NextLink>
      </ButtonWrapper>
    </>
  )
}

export default TemplateSelectYourTribe
