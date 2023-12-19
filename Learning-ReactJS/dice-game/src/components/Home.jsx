import styled from 'styled-components'
import diceImage from '../assets/images/dices.png'

const Home = ({toggle}) => {

    return (
    <Container>
        <div className='homeImage'>
            <img src={diceImage} alt="dice-image" />
        </div>

        <div className='homePageInfo'>
            <h1>Guess The Dice</h1>

            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
    )
}

export default Home


const Container = styled.div`
    max-width: 1182px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .homePageInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        h1 {
            font-size: 96px;
            font-weight: 700;
            white-space: pre-wrap;
            text-align: end;
            text-transform: uppercase;
        }
    }
`

const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 16px;
    font-weight: 600;
    width: 41%;
    padding: 10px 18px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: white;
        color: black;
        border-color: black;
    }
`