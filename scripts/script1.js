// Add interactivity to the button
const letsGoButton = document.getElementById('letsGoButton');

letsGoButton.addEventListener('click', () => {
  // Change the text and animate the button
  letsGoButton.textContent = 'Jao! Jao! Jao!';
  letsGoButton.style.animation = 'none'; // Reset animation
  setTimeout(() => {
    letsGoButton.style.animation = 'bounce 0.5s infinite';
  }, 10);

  // Add a confetti effect (optional)
  setTimeout(() => {
    createConfetti();
  }, 500);
});

// Confetti effect function
function createConfetti() {
  const confettiCount = 100;
  const container = document.querySelector('.container');

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
    container.appendChild(confetti);

    // Remove confetti after animation ends
    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
}
