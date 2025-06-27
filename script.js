const share = document.querySelector(".share");
const targetDiv = document.querySelector(".socials");
const profile = document.querySelector(".avatar");
const returnButton = document.querySelector(".return")


share.addEventListener("click", () => {
    profile.classList.toggle("active-profile");
    targetDiv.classList.toggle("active-social");
})

returnButton.addEventListener("click", () => {
    profile.classList.toggle("active-profile");
    targetDiv.classList.toggle("active-social");
})