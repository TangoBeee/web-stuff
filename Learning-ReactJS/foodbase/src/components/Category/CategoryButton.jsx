import styled from "styled-components"

const CategoryButton = ({ buttonText, setFoodFilter }) => {
  return (
    <CategoryButtonBox onClick={() => setFoodFilter(buttonText)}>
        {buttonText}
    </CategoryButtonBox>
  )
}

export default CategoryButton

const CategoryButtonBox = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: white;
    border-radius: 5px;
    background-color: #FF4343;
    padding: 6px 12px;
    cursor: pointer;
    transition: border 0.2s ease-in-out;
    border: 1px solid transparent;

    &:active {
        border: 1px solid black;
    }


    @media (max-width: 350px) {
      & {
        flex: 1 1 160px;
        text-align: center;
      }
    }
`