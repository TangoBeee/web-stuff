const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
    const xPos = event.pageX - btnEl.offsetLeft;
    const yPos = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos", xPos + "px");
    btnEl.style.setProperty("--yPos", yPos + "px");
})