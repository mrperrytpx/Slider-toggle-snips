const slider = document.getElementById("slider");
const selector = document.getElementById("selector");
const inputValue = document.querySelector(".inputValue");
const sliderColor = document.querySelector(".sliderColor");

slider.oninput = () => {
    sliderColor.style.width = `${slider.value}%`;
    inputValue.textContent = slider.value;
    selector.style.left = slider.value + "%";
};