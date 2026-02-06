let count = 0;

const incrementBtn = document.querySelector('#incrementBtn');
const countDisplay = document.querySelector('#count');

incrementBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
