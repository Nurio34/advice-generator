
const apiUrl = `https://api.adviceslip.com/advice`

const titleEl = document.querySelector(".title")
const advice = document.querySelector(".advice")
const btn = document.querySelector("#btn")

    btn.addEventListener("click", getQuote)

async function getQuote() {
   

    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data.slip)

    titleEl.textContent = `Advice #${data.slip.id}`
    advice.textContent = data.slip.advice
}    