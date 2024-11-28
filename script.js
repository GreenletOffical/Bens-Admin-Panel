document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Redirecting to game page...');
    // You can add a redirection to a game page here
});

const gameButtons = document.querySelectorAll('.game-card button');
gameButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Redirecting to the game...');
        // You can add a redirection to specific games here
    });
});