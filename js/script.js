document.getElementById().value = Math.floor(Math.random() * 1000);

const sliders = document.querySelectorAll(".slider_ranger");
const filter = document.querySelectorAll(".filters");

sliders.forEach((slider) => {
    const output = slider.parentNode.querySelector("output");
    output.value = slider.value;
    const filterId = slider.dataset.filterId;
    const filterAttr = slider.dataset.filterAttr;
    const filterElement = filter.querySelector(`#${filterId}`);
    filterElement.setAttribute(filterAttr, slider.value);
    slider.addEventListener("input", function () {
    output.value = this.value;
    filterElement.setAttribute(filterAttr, this.value);
  });
});
