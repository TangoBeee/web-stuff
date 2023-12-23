import styled from "styled-components"
import CategoryButton from "./CategoryButton"

const Categories = ({ setFoodFilter }) => {
  return (
    <CategoriesContain>
        <CategoryButton buttonText="Indian" setFoodFilter={setFoodFilter} />
        <CategoryButton buttonText="Canadian" setFoodFilter={setFoodFilter} />
        <CategoryButton buttonText="American" setFoodFilter={setFoodFilter} />
        <CategoryButton buttonText="Russian" setFoodFilter={setFoodFilter} />
    </CategoriesContain>
  )
}

export default Categories

const CategoriesContain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    @media (max-width: 350px) {
      & {
        flex-wrap: wrap;
      }
    }
`