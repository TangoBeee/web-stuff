import styled from "styled-components"

const Score = ({ score }) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default Score

const ScoreContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 100px;
        font-weight: 500;
        line-height: 100%;
    }

    p {
        font-size: 24px;
        font-weight: 500;
    }
`