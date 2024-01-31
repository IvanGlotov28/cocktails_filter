import { useState } from 'react'
import './App.css'
import Search from './components/search/Search'
import CocktailCard from './components/CocktailCard/CocktailCard'

function App() {
  const [selectedData, setSelectedData] = useState(null)

  const handleSelectionChange = (selectedData) => {
    setSelectedData(selectedData)
  }
  return (
    <div className="App">
      <Search onSelectionChange={handleSelectionChange} />
      {selectedData && <CocktailCard selectedData={selectedData} />}
    </div>
  )
}

export default App
