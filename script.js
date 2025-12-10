document.addEventListener('DOMContentLoaded', function () {
  setupFoodFavorites();
  setupContactFormMessage();
});

function setupFoodFavorites() {
  const cards = document.querySelectorAll('.food-card');
  if (!cards.length) return;

  cards.forEach(function (card) {
    const button = card.querySelector('.favorite-btn');
    if (!button) return;

    button.addEventListener('click', function () {
      const isNowFavorite = card.classList.toggle('highlight-favorite');

      if (isNowFavorite) {
        button.textContent = 'Unmark favorite';
        button.setAttribute('aria-pressed', 'true');
      } else {
        button.textContent = 'Mark as favorite';
        button.setAttribute('aria-pressed', 'false');
      }
    });
  });
}

function setupContactFormMessage() {
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');

  if (!form || !status) return;

  form.addEventListener('submit', function (event) {
        event.preventDefault();

    const nameInput = form.querySelector('input[name="name"]');
    const dishInput = form.querySelector('input[name="dish"]');

    const name = nameInput ? nameInput.value.trim() : '';
    const dish = dishInput ? dishInput.value.trim() : '';

    let text = 'Thank you for sharing your favorite Korean dish!';

    if (name || dish) {
      text = 'Thank you';
      if (name) text += ', ' + name;
      text += '!';

      if (dish) {
        text += ' ' + dish + ' sounds like a delicious choice.';
      }
    }

    status.textContent = text;
    status.classList.add('show-message');
    form.reset();
  });
}