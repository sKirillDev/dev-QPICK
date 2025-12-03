import '../css/style.css'
import './dropdown.js'

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


const wrapper = document.getElementById('cases-wrapper');
const indicator = document.getElementById('cases-indicator');
const total = wrapper.children.length;

function updateIndicator() {
    const scrollLeft = wrapper.scrollLeft;
    const cardWidth = wrapper.scrollWidth / total;
    const currentIndex = Math.round(scrollLeft / cardWidth);
    indicator.textContent = `${currentIndex + 1} из ${total}`;
}

wrapper.addEventListener('scroll', updateIndicator);