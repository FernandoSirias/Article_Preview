// Select elements from DOM

const share = document.querySelector(".share");
const tooltip = document.querySelector(".tooltip");

share.addEventListener('click', () => {
    tooltip.classList.toggle('active');
    share.classList.toggle('active');
})

