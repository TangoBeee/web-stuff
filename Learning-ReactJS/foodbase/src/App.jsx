import { useEffect, useState } from 'react'
import './App.css'
import FoodSection from './components/FoodSection/FoodSection'
import Navigation from './components/Navigation'
import ErrorSection from './components/ErrorSection'
import LoadingSection from './components/LoadingSection'
import styled from 'styled-components'

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/"

const App = () => {

  const [foodData, setFoodData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isErrored, setIsErrored] = useState(false)

  const [foodFilter, setFoodFilter] = useState("Indian")

  useEffect(() => {
    try {
      const fetchFoodData = async () => {
        setIsLoading(true)
        const response = await fetch(BASE_URL + `filter.php?a=${foodFilter}`)

        const jsonResponse = await response.json()
        setFoodData(jsonResponse)
        setIsLoading(false)

        if(jsonResponse.meals == null) setIsErrored(true)
        else setIsErrored(false)
      }

      fetchFoodData()
    } catch (error) {
      setIsErrored(true)
      setIsLoading(false)
    }
  }, [foodFilter])

  return (
    <AppContainer>
      <Navigation setFoodFilter={setFoodFilter} />

      <main>
        {
          isLoading ?
            <LoadingSection />
            : (
              isErrored ?
                <ErrorSection /> :
                <FoodSection foodData={foodData} />
              )
        }
      </main>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 250px);

    @media (max-width: 700px) {
      height: calc(100vh - 320px);
    }
  }
`