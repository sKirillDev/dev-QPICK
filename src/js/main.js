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
