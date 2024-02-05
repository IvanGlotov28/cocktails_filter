import { useState } from 'react'
import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import Search from './components/search/Search'
import CocktailCard from './components/CocktailCard/CocktailCard'
import CheckboxFilters from './components/сheckboxFilters/CheckboxFilters'
import FiltersSearch from './components/FiltersSearch/FiltersSearch'
import SearchByFilter from './components/searchByFilter/SearchByFilter'

function App() {
  const [selectedData, setSelectedData] = useState(null)
  const [сheckedBox, setCheckedBox] = useState(null)
  const [selectedFilterData, setSelectedFilterData] = useState(null)

  const handleSelectionChange = (selectedData) => {
    setSelectedData(selectedData)
  }

  const handleCheckedBox = (сheckedBox) => {
    setCheckedBox(сheckedBox)
  }

  const handleSelectionFilterChange = (selectedFilterData) => {
    setSelectedFilterData(selectedFilterData)
  }

  return (
    <div className="App">
      <Grid
        gridTemplateColumns="repeat(5, 1fr)"
        gridTemplateRows="repeat(1, 1fr)"
        gridColumnGap="0"
        gridRowGap="0"
      >
        <GridItem gridArea="1 / 3 / 2 / 4;">
          {!selectedFilterData ? (
            <Search onSelectionChange={handleSelectionChange} />
          ) : (
            <SearchByFilter
              сheckedBox={сheckedBox}
              onSelectionChange={handleSelectionChange}
              selectedFilterData={selectedFilterData}
            />
          )}
        </GridItem>

        <GridItem gridArea=" 2 / 1 / 3 / 2;">
          <CheckboxFilters onCheckedBox={handleCheckedBox} />
          {сheckedBox && (
            <FiltersSearch
              onSelectionFilterChange={handleSelectionFilterChange}
              сheckedBox={сheckedBox}
            />
          )}
        </GridItem>

        <GridItem gridArea=" 2 / 3 / 3 / 4;">
          {selectedData && <CocktailCard selectedData={selectedData} />}
        </GridItem>
      </Grid>
    </div>
  )
}
export default App
