import { useEffect, useState } from "react";
import styled from "styled-components"

const FoodCard = ({ foodName, foodIcon }) => {

  const [fontSize, setFontSize] = useState("2.4rem");

  useEffect(() => {
    const handleResize = () => {
      if(foodName.length >= 50 || window.innerWidth <= 500) setFontSize("1.8rem")
      else if (foodName.length >= 30 || window.innerWidth <= 600) {
        setFontSize("2rem");
      } else {
        setFontSize("2.4rem");
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  return (
    <FoodCardContainer>
      <div className="food-image">
        <img src={foodIcon} alt={`${foodName}-icon`} />
      </div>

      <div className="food-info">
        <div className="info">
          <h1 style={{fontSize}}>{foodName}</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.</p>
        </div>

        <button>$5.00</button>
      </div>
    </FoodCardContainer>
  )
}

export default FoodCard

const FoodCardContainer = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  gap: 30px;
  width: 550px;
  height: 350px;
  padding: 30px;
  
  border-radius: 19.447px;
  border: 0.659px solid #98F9FF;
  background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);

  .food-image {
    img {
      max-width: 200px;
      border-radius: 50%;
    }
  }

  .food-info {
    display: flex;
    flex: 2 1 auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;

      h1 {
        color: white;
        font-size: 2.4rem;
        font-weight: 600;
      }

      p {
        color: white;
        font-size: 1rem;
        font-weight: 400;
      }
    }

    button {
      background-color: red;
      border: 1px solid transparent;
      color: white;
      font-size: 20px;
      font-weight: 600;
      padding: 5px 6px;
      border-radius: 5px;
      transition: border 0.2s ease-in-out;
      cursor: pointer;

      &:active {
        border: 1px solid black;
      }
    }
  }

  @media (max-width: 600px) {
        & {
          width: 100%;
          height: 400px;

          flex-direction: column;
        }

        .food-info {
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .food-image img {
          max-width: 150px;
        }
    }

    @media (max-width: 370px) {
      & {
        height: fit-content;
      }
    }
`