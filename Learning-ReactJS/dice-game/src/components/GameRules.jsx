import styled from "styled-components"

const GameRules = () => {
  return (
    <GameRulesContainer>
        <h1>How to play dice game</h1>

        <ul>
            <li>Select any number.</li>
            <li>Click on dice image.</li>
            <li>After click on  dice  if selected number is equal to dice number you will get same 20 points.</li>
            <li>If you get wrong guess then 10 point will be dedcuted.</li>
        </ul>
    </GameRulesContainer>
  )
}

export default GameRules

const GameRulesContainer = styled.div`
    margin-top: 50px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    background-color: #FBF1F1;

    h1 {
        font-size: 24px;
        font-weight: 700;
    }

    ul li {
        font-size: 16px;
        font-weight: 500;
    }
`