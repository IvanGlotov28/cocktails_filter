import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { filtersCocktails_URL, cocktailsApiOptions } from '../api'

const FiltersSearch = ({ сheckedBox }) => {
  const [filtersSearch, setFiltersSearch] = useState(null)

  const loadOptions = async () => {
    try {
      const response = await fetch(
        `${filtersCocktails_URL}${сheckedBox}=list`,
        cocktailsApiOptions
      )

      console.log(response)
      const data = await response.json()
      const formattedOptions = data.drinks.map((item) => {
        return {
          //тільки для стаканів
          value: item.strGlass,
          label: item.strGlass,
        }
      })
      return { options: formattedOptions }
    } catch (error) {
      console.log('Error fetching data:', error.message)
    }

    return { options: [] }
  }

  const handleOnchange = (searchData) => {
    setFiltersSearch(searchData)
  }
  return (
    <AsyncPaginate
      placeholder="Search cocktail"
      debounceTimeout={600}
      value={filtersSearch}
      loadOptions={loadOptions}
      onChange={handleOnchange}
    />
  )
}

export default FiltersSearch
