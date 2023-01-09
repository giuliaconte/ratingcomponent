const main = document.querySelector(".wrap")
const thanks = document.querySelector(".wrap2")
const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", () => {
    thanks.classList.remove("hidden")
    main.style.display = "none"
})

const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})