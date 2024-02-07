import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, createContext, useContext } from 'react'
import './App.css'
import Home from './components/Home/Home'
import CocktailPage from './components/CocktailPage/CocktailPage'

export const CocktailContext = createContext()
function App() {
  const [cocktailID, setCocktailID] = useState(null)
  const [cocktailInfo, setCocktailInfo] = useState(null)
  console.log(cocktailInfo)
  return (
    <BrowserRouter>
      <CocktailContext.Provider
        value={{ cocktailID, setCocktailID, cocktailInfo, setCocktailInfo }}
      >
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path={`${cocktailID}`} element={<CocktailPage />} />
          </Routes>
        </div>
      </CocktailContext.Provider>
    </BrowserRouter>
  )
}
export default App
