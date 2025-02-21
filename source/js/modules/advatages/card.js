function initializeCards() {
  document.querySelectorAll('.card').forEach((card) => {
    const button = card.querySelector('.card__button');

    if (button) {
      button.addEventListener('click', () => {
        card.classList.toggle('is-active');
      });
    }
  });
}

export {initializeCards};
