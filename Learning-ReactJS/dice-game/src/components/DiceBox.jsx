import styled from "styled-components"

const DiceBox = ({onDiceSelect, value, isSelected}) => {
  return (
    <Box onClick={onDiceSelect} isSelected={isSelected}>
        <h1>{value}</h1>
    </Box>
  )
}

export default DiceBox

const Box = styled.div`
    width: 72px;
    height: 72px;
    padding: 18px 0px;
    display: grid;
    place-content: center;
    border: 1px solid black;
    cursor: pointer;
    color: ${(props) => !props.isSelected ? "black" : "white"};
    background-color: ${(props) => props.isSelected ? "black" : "white"};

    h1 {
        font-size: 24px;
        font-weight: 700;
        transition: font-size 0.2s ease-in-out;
    }

    &:hover {
        h1 {
            font-size: 32px;
        }
    }
`