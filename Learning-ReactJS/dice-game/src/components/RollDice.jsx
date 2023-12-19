import styled from "styled-components"
import GameRules from "./GameRules"
import { useRef, useEffect, useState } from "react"

const RollDice = ({ currentDice, setCurrentDice, selectedDice, setShowError, score, setScore }) => {
    const [isRuleBoxOpened, setIsRuleBoxOpened] = useState(false)
    const [isDiceRolling, setIsDiceRolling] = useState(false);

    const rulesContainerRef = useRef(null);
    useEffect(() => {
      if (isRuleBoxOpened) {
        rulesContainerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    }, [isRuleBoxOpened]);
  

    const generateRandomDiceNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const rollDice = () => {
        if(selectedDice !== undefined) {
            setIsDiceRolling(true)
            const diceNum = generateRandomDiceNumber(1, 7)

            const rollingDiceInterval = setInterval(() => {
                const tempDiceNum = generateRandomDiceNumber(1, 7)
                setCurrentDice(tempDiceNum)
            }, 100)

            setTimeout(() => {
                clearInterval(rollingDiceInterval)
                setCurrentDice(diceNum)
                setIsDiceRolling(false)

                if(diceNum === selectedDice) {
                    setScore(score + 20)
                } else {
                    setScore(score-10)
                }
            }, 2000);
            setShowError(false)
        } else {
            setShowError(true)
        }
    }



    return (
    <RollDiceContainer>
        <DiceInfo>
            <div className={isDiceRolling ? 'disabled' : ''} onClick={rollDice}>
                <img src={`src/assets/images/dice/dice_${currentDice}.png`} alt="dice-image" />
            </div>

            <h1>Click on Dice to roll</h1>
        </DiceInfo>

        <Button>
            <button onClick={() => setScore(0)}>Reset Score</button>
            <button onClick={() => setIsRuleBoxOpened(!isRuleBoxOpened)} className="ruleButton"> {isRuleBoxOpened ? "Hide Rules" : "Show Rules"} </button>
        </Button>

        <div ref={rulesContainerRef}>
            {isRuleBoxOpened ? <GameRules /> : ""}
        </div>
    </RollDiceContainer>
    )
}

export default RollDice

const RollDiceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    gap: 36px;

    img {
        cursor: pointer;
    }

    h1 {
        font-size: 24px;
        font-weight: 500;
    }
`

const DiceInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    .disabled {
        pointer-events: none;
    }
`

const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    button {
        min-width: 200px;
        padding: 15px 18px;
        background-color: white;
        color: black;
        font-size: 16px;
        font-weight: 600;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
    }

    .ruleButton {
        background-color: black;
        color: white;
    }
`