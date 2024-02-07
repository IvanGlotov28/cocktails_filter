import { useEffect, useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import '../search/Search'
import {
  searchByFilter_URL,
  cocktailByName_URL,
  cocktailsApiOptions,
} from '../api'

const SearchByFilter = ({
  onSelectionChange,
  сheckedBox,
  selectedFilterData,
}) => {
  const [search, setSearch] = useState(null)

  const loadOptions = async () => {
    try {
      const response = await fetch(
        `${searchByFilter_URL}${сheckedBox}=${selectedFilterData.value}`,
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
     

      return { options: formattedOptions }
    } catch (error) {
      console.log('Error fetching data', error.message)
    }

    return { options: [] }
  }

  const getFullData = async (searchData) => {
    try {
      const response = await fetch(
        `${cocktailByName_URL}${searchData.value}`,
        cocktailsApiOptions
      )
      const data = await response.json()
      console.log(data)
      const formattedOptions = data.drinks.map((drink) => {
        return {
          label: drink.strDrink,
          value: drink.strDrink,
          drink,
        }
      })
      console.log(formattedOptions[0])
      onSelectionChange(formattedOptions[0])
      return { options: formattedOptions }
    } catch (error) {
      console.log('Error fetching data', error.message)
    }
    return { options: [] }
  }

  const handleOnchange = (searchData) => {
    setSearch(searchData)
    
    getFullData(searchData)
  }

  useEffect(() => {
    loadOptions()
  }, [сheckedBox, selectedFilterData])
  return (
    <AsyncPaginate
      placeholder="Search cocktail by filter"
      debounceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
      className="inp"
    />
  )
}

export default SearchByFilter
