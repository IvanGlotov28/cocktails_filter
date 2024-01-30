import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import styles from './Search.module.css'
import { cocktailByNameURL, cocktailsApiOptions } from '../api'

const Search = () => {
  const [search, setSearch] = useState(null)

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${cocktailByNameURL}${inputValue}`,
        cocktailsApiOptions
      )
      const data = await response.json()

      const formattedOptions = data.drinks.map((drink) => {
        return {
          drink,
        }
      })
      console.log(formattedOptions)

      return { options: formattedOptions }
    } catch (error) {
      console.log('Error fetching data')
    }

    return {
      options: [],
    }
  }

  const handleOnchange = (searchData) => {
    setSearch(searchData)
  }

  return (
    <AsyncPaginate
      placeholder="Search cocktail"
      debounceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
      classNamePrefix={styles.customAsyncPaginate}
    />
  )
}

export default Search
