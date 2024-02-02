import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import './Search.css'
import { cocktailByName_URL, cocktailsApiOptions } from '../api'

const Search = ({ onSelectionChange }) => {
  const [search, setSearch] = useState(null)

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${cocktailByName_URL}${inputValue}`,
        cocktailsApiOptions
      )
      const data = await response.json()
      console.log(data)

      const formattedOptions = data.drinks.map((drink) => {
        return {
          value: drink.strDrink,
          label: drink.strDrink,
          drink,
        }
      })
      console.log(formattedOptions)

      return { options: formattedOptions }
    } catch (error) {
      console.log('Error fetching data')
    }

    return { options: [] }
  }

  
  const handleOnchange = (searchData) => {
    console.log(searchData)
    setSearch(searchData)
    onSelectionChange(searchData)
  }

  return (
    <AsyncPaginate
      placeholder="Search cocktail"
      debounceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
      className="inp"
    />
  )
}

export default Search
