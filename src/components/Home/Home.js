import { useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Search from '../search/Search'
import CocktailCard from '../CocktailCard/CocktailCard'
import CheckboxFilters from '../сheckboxFilters/CheckboxFilters'
import FiltersSearch from '../FiltersSearch/FiltersSearch'
import SearchByFilter from '../searchByFilter/SearchByFilter'
import ResetFiltersButton from '../resetFiltersButton/ResetFiltersButton'
function Home() {
  const [selectedData, setSelectedData] = useState(null)
  const [сheckedBox, setCheckedBox] = useState(null)
  const [selectedFilterData, setSelectedFilterData] = useState(null)
  const [reset, setReset] = useState(false)

  const handleSelectionChange = (selectedData) => {
    setSelectedData(selectedData)
  }

  const handleCheckedBox = (сheckedBox) => {
    setCheckedBox(сheckedBox)
  }

  const handleSelectionFilterChange = (selectedFilterData) => {
    setSelectedFilterData(selectedFilterData)
  }

  const handleOnResetFilterButton = (filterReset) => {
    setSelectedFilterData(null)
    setCheckedBox(null)
    setReset(filterReset)
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
          {сheckedBox && (
            <ResetFiltersButton
              onResetFilterButtonChange={handleOnResetFilterButton}
            />
          )}

          <CheckboxFilters
            reset={reset}
            setReset={setReset}
            onCheckedBox={handleCheckedBox}
          />
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
export default Home
