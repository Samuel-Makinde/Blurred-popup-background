const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupConatainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupConatainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupConatainerEl.classList.add("active");
})