document.querySelectorAll('.card').forEach(card => {
  const realPrice = Number(card.querySelector('.real-price').textContent.replace(/[^\d.]/g, '')) || 0;
  const currentPrice = card.querySelector('.current-price');

  const desktopDiscount = card.querySelector('.discount.md\\:block');
  const mobileDiscount = card.querySelector('.discount.md\\:hidden');

  if (realPrice > 0 && currentPrice && Number(currentPrice.textContent.replace(/[^\d.]/g, '')) < realPrice) {
    const discountPercent = Math.round((realPrice - Number(currentPrice.textContent.replace(/[^\d.]/g, ''))) / realPrice * 100);

    if (desktopDiscount) {
      desktopDiscount.textContent = "-" + discountPercent + "%";
      desktopDiscount.classList.add('ml-6.25');
    }

    if (mobileDiscount) mobileDiscount.textContent = "-" + discountPercent + "%";

    currentPrice.classList.add('!text-red-400');
  } else {
    if (desktopDiscount) {
      desktopDiscount.textContent = "";
      desktopDiscount.classList.remove('ml-6.25');
    }
    if (mobileDiscount) mobileDiscount.textContent = "";
    currentPrice.classList.remove('!text-red-400');
  }
});