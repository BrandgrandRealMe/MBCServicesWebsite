// Rezize cards to match height
function setEqualHeights() {
  const cardsDiv = document.querySelector('.cards');
  const cards = cardsDiv.querySelectorAll('.card');
  const button = document.querySelector('.button');
  const buttonHeight = button.offsetHeight + button.offsetHeight;
  // Find the tallest div height
  let maxHeight = 0;
  for (const item of cards) {
    item.style.height = 'fit-content';
    const itemHeight = item.offsetHeight;
    const prefHeight = itemHeight + buttonHeight;
    maxHeight = Math.max(maxHeight, prefHeight);
  }

  // Set all divs to the same height
  for (const item of cards) {
    item.style.height = `${maxHeight}px`;
  }
}

// Call the function on page load and window resize (optional)
window.addEventListener('load', setEqualHeights);
window.addEventListener('resize', setEqualHeights);
