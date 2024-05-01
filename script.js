var card = document.querySelector('.profile-card');

function flipCard(showBack) {
  if (showBack) {
    card.style.transform = 'rotateY(180deg)';
  } else {
    card.style.transform = 'rotateY(0deg)';
  }
}
