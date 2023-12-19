import styled from "styled-components"

import Score from "./Score"
import DiceSelector from "./DiceSelector"
import GameError from "./GameError"
import RollDice from "./RollDice"
import { useState } from "react"

const Game = () => {
  const [score, setScore] = useState(0)
  const [selectedDice, setSelectedDice] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [showError, setShowError] = useState(false)

  return (
    <>
      {showError ? <GameError /> : ""}
      
      <section>
        <TopSection>
          <Score
            score={score}
            selectedDice={selectedDice}
            currentDice={currentDice}
          />

          <DiceSelector
            selectedDice={selectedDice}
            setSelectedDice={setSelectedDice}
            
            setShowError={setShowError}
          />

        </TopSection>

        <RollDice
          currentDice={currentDice}
          setCurrentDice={setCurrentDice}
          
          selectedDice={selectedDice}
          
          setShowError={setShowError}

          score={score}
          setScore={setScore}
        />

      </section>
    </>
  )
}

export default Game

const TopSection = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
