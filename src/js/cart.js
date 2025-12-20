const cartEmpty = document.getElementById('cart-empty');
const cartFilled = document.getElementById('cart-filled');
const btnCartEmpty = document.getElementById('btn-cart-empty');
const btnCartFilled = document.getElementById('btn-cart-filled');

btnCartEmpty.addEventListener('click', () => {
  cartEmpty.classList.remove('hidden');
  cartFilled.classList.add('hidden');
});

btnCartFilled.addEventListener('click', () => {
  cartFilled.classList.remove('hidden');
  cartEmpty.classList.add('hidden');
});


const cards = document.querySelectorAll('.item-in-cart');

cards.forEach(card => {
  const minus = card.querySelector('.btn-clicker-minus');
  const plus = card.querySelector('.btn-clicker-plus');
  const countText = card.querySelector('.count-clicker');

  let count = 0;

  plus.addEventListener('click', () => {
    count++;
    countText.textContent = count;
  });

  minus.addEventListener('click', () => {
    if (count > 0) {
      count--;
      countText.textContent = count;
    }
  });
});


const deliveryChoiceToggle = document.getElementById('delivery-choice-toggle');
const deliveryOption = document.getElementById('delivery-option');
const arrow = document.querySelector('.arrow');

deliveryChoiceToggle.addEventListener('click', () => {
  deliveryOption.classList.toggle('hidden');
  arrow.classList.toggle('rotate-180');
})