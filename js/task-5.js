function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const spanColorInText = document.querySelector('.color');

changeColor.addEventListener('click', event => {
  event.preventDefault();
  bodyColor.style.backgroundColor = getRandomHexColor();

  // it's unclear from description task if dash is present or should be replaced

  // color in text format were appended following the dash character. Two approaches::

  spanColorInText.textContent = `-${getRandomHexColor()}`;
  spanColorInText.style.color = getRandomHexColor();

  // spanColorInText.innerHTML = '-';
  // spanColorInText.insertAdjacentHTML('beforeend', getRandomHexColor());
});
