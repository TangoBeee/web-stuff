import styled from "styled-components"
import DiceBox from "./DiceBox"

const DiceSelector = ({ selectedDice, setSelectedDice, setShowError }) => {

    const diceValues = [1, 2, 3, 4, 5, 6]

    return (
    <SelectorContainer>
        <DiceContainer>
            {
                diceValues.map((value, idx) => (
                    <DiceBox
                        onDiceSelect={() => {
                            setShowError(false)
                            setSelectedDice(value)
                        }}
                        isSelected={selectedDice == value}
                        key={idx}
                        value={value}
                    />
                ))
            }
        </DiceContainer>

        <h1>Select Number</h1>
    </SelectorContainer>
    )
}

export default DiceSelector

const SelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 30px;

    h1 {
        font-size: 24px;
        font-weight: 700;
        line-height: 0;
    }
`

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`