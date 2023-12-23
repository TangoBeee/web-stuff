import styled from "styled-components"
import FoodCard from "./FoodCard"

const FoodSection = ({ foodData }) => {
  return (
    <FoodContainer>
      {
        foodData?.meals.map((food) => (
          <FoodCard
            key={food.idMeal}
            foodName={food.strMeal}
            foodIcon={food.strMealThumb}
          />
        ))
      }
    </FoodContainer>
  )
}

export default FoodSection

const FoodContainer = styled.div`
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 30px;
    gap: 20px;
    flex-wrap: wrap;
    background-image: url("src/assets/bg.png");
    background-size: cover;
    background-repeat: no-repeat;

    &::-webkit-scrollbar {
      width: 0px;
    }
`
