import { useEffect, useState } from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

import MuiButton from '@material-ui/core/Button'
import MuiArrowForwardIcon from '@material-ui/icons/ArrowForward'
import MuiArrowBackIcon from '@material-ui/icons/ArrowBack'

import Search from '../components/molecules/Search'
import OptionList from '../components/molecules/OptionList'
import sortOptions from '../helpers/sortOptions'

const ContainerSelectYourTribe = (props) => {
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

  return (
    <>
      <SelectionWrapper>
        <Search
          value={searchValue}
          inputValue={inputValue}
          options={suggestions}
          placeholder="Faça uma busca..."
          noOptionsText="Não há tribos para selecionar..."
          fullWidth
          blurOnSelect
          onChange={handleSearchChange}
          onInputChange={(event, value) => setInputValue(value)}
        />
        <br />
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

const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 400px;
  margin: 10px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

export default ContainerSelectYourTribe
