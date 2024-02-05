import { useState, useEffect } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { filtersCocktails_URL, cocktailsApiOptions } from '../api'
import selectionCriterion from './selectionCriteria'
import './FiltersSearch.css'

const FiltersSearch = ({ сheckedBox, onSelectionFilterChange }) => {
  const [filtersSearch, setFiltersSearch] = useState(null)
  const loadOptions = async () => {
    try {
      const response = await fetch(
        `${filtersCocktails_URL}${сheckedBox}=list`,
        cocktailsApiOptions
      )

      const data = await response.json()
      console.log(data)

      const formattedOptions = data.drinks.map((item) => {
        const objProp = selectionCriterion(сheckedBox)
        return {
          value: item[objProp],
          label: item[objProp],
        }
      })

      return { options: formattedOptions }
    } catch (error) {
      console.log('Error fetching data:', error.message)
      return { options: [] }
    }
  }

  useEffect(() => {
    loadOptions()
  }, [сheckedBox])

  const handleOnchange = (searchData) => {
    setFiltersSearch(searchData)
    onSelectionFilterChange(searchData)
    console.log(searchData)
  }

  return (
    <AsyncPaginate
      placeholder="Search cocktail"
      debounceTimeout={600}
      value={filtersSearch}
      loadOptions={loadOptions}
      onChange={handleOnchange}
      className="small-inp"
    />
  )
}

export default FiltersSearch
