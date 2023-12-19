import styled from "styled-components"

const GameError = () => {
  return (
    <GameErrorContainer>
        <h1>You have not selected any number</h1>
    </GameErrorContainer>
  )
}

export default GameError


const GameErrorContainer = styled.div`
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 400;
    color: #FF0C0C;
  }
`