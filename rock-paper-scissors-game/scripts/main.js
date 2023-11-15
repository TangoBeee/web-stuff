const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user-result-image"),
    opponentResult = document.querySelector(".opponent-result-image"),
    resultMessage = document.querySelector(".result-message"),
    gameOptions = document.querySelectorAll(".option-item");

const options = ["R", "P", "S"];
const outcomes = {
    RR: "Draw!!",
    RP: "Opponent Won!",
    RS: "You Won!",
    
    PR: "You Won!",
    PP: "Draw!!",
    PS: "Opponent Won!",

    SR: "Opponent Won!",
    SP: "You Won!",
    SS: "Draw!!"
}

gameOptions.forEach((option, index) => {
    option.addEventListener("click", (event) => {
        option.classList.add("active");

        userResult.querySelector("img").src = opponentResult.querySelector("img").src = "images/rock.png";

        gameOptions.forEach((option2, index2) => {
            option !== option2 && option2.classList.remove("active")
        });

        resultMessage.style.textDecoration = "none";

        gameContainer.classList.add("start");

        userResult.classList.add("result-image-animation");
        opponentResult.classList.add("result-image-animation");

        resultMessage.textContent = "Wait..."

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            
            userResult.classList.remove("result-image-animation");
            opponentResult.classList.remove("result-image-animation");

            let optionImageSrc = event.target.querySelector("img").src
            userResult.querySelector("img").src = optionImageSrc;
    
            let randomNumber = Math.floor(Math.random()*3);
            let opponentOptionsArr = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            
            opponentResult.querySelector("img").src = opponentOptionsArr[randomNumber];
    
            let userOptionVal = options[index];
            let opponentOptionVal = options[randomNumber];
    
            let optionValues = outcomes[userOptionVal+opponentOptionVal];
            resultMessage.textContent = optionValues;
        }, 2500);

    });
});