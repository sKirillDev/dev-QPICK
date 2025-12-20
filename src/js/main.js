import '../css/style.css'
import './dropdown.js'
import './product-discount.js'
import './map.js'
import './cart.js'

if (!document.getElementById('svg-sprite')) {
  fetch('icons.svg')
    .then(res => res.text())
    .then(svg => {
      const div = document.createElement('div');
      div.id = 'svg-sprite';
      div.style.display = 'none';
      div.innerHTML = svg;
      document.body.prepend(div);
    });
}

const btnMenuMobile = document.getElementById('menu');
const catalogDesktop = document.getElementById('catalog');

btnMenuMobile.addEventListener('click', () => {
  catalogDesktop.classList.toggle('hidden');
})


const likeButtons = document.querySelectorAll('.likeBtn');

likeButtons.forEach(btn => {
  let liked = false;
  const img = btn.querySelector('.likeImg');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    liked = !liked;
    img.src = liked ?
      './assets/img/favorite-checked-icon.svg' :
      './assets/img/favorite-unchecked-icon.svg';
  });
});


document.querySelectorAll('.cards-wrapper').forEach(wrapper => {
  const indicator = wrapper.previousElementSibling.querySelector('.indicator');
  const cards = wrapper.children;
  const total = cards.length;

  function updateIndicator() {
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
    const currentIndex = Math.round(wrapper.scrollLeft / cardWidth);
    indicator.textContent = `${Math.min(currentIndex + 1, total)} из ${total}`;
  }

  wrapper.addEventListener('scroll', updateIndicator);
  window.addEventListener('resize', updateIndicator);
  updateIndicator();
});


document.addEventListener('DOMContentLoaded', () => {
  const mobileHeader = document.querySelector('.mobile-header');
  const logo = document.querySelector('.logo');
  const pageTitle = mobileHeader.querySelector('.page-title');

  const hasTitle = pageTitle && pageTitle.textContent.trim() !== '';

  if (window.innerWidth < 768) {
    if (hasTitle) {
      mobileHeader.classList.remove('hidden');
      logo.classList.add('hidden');
    } else {
      mobileHeader.classList.add('hidden');
      logo.classList.remove('hidden');
    }
  } else {
    mobileHeader.classList.add('hidden');
    logo.classList.remove('hidden');
  }
});