const darkButton = document.querySelector(".dark-theme");
const lightButton = document.querySelector(".light-theme");
const body= document.querySelector("body")

function toggleTheme() {
    lightButton.classList.toggle('hide')
    darkButton.classList.toggle('hide')
    body.classList.toggle('dark-mode')
}

darkButton.addEventListener("click", toggleTheme)
lightButton.addEventListener("click", toggleTheme)