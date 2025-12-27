const toggles = document.querySelectorAll('.dropdown-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const option = toggle.nextElementSibling;
    const arrow = toggle.querySelector('.arrow');

    option.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
  });
});


const dropdown = document.getElementById('dropdown');
const dropdownMenu = document.querySelector('.menu');

dropdownMenu.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
})


const hamburger = document.querySelector('.hamburger');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
  });
}