
// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {

    const cardValues = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];

    
    const cardContainer = this.getElementById("card-container") ;

    // Shuffle the card values
    shuffleCards(cardValues);
    
    // Create and display the cards
    cardValues.forEach((value) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = value;
        card.addEventListener('click', flipCard); // Event listener added, so that clicked card undergoes function.
        cardContainer.appendChild(card);
      });

});

var firstCard;
var secondCard;
var chosenCard;
let lockboard = false;

/**
 * Shuffle cards using math random
 */
function shuffleCards(cardValues) {
    cardValues.sort(() => Math.random() - 0.5);
};


function flipCard (e) {
    const cardElement = e.target;

    if (lockboard) return; //prevents the user to click more cards during matching process
    if (cardElement === firstCard) return;

    cardElement.classList.add("flip");

    if (!firstCard) {
        firstCard = cardElement;
        return;
    };
    secondCard = cardElement;
    checkForMatch();

};

/**
 * Function that checks if the first and second card match
 */
function checkForMatch(){
    const isMatch = firstCard.textContent === secondCard.textContent;

    isMatch ? lockCards() : unflipCards();
}

/**
 * disable clicking event for matching cards
 */
function lockCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetboard();
}

/**
 * Unflip cards
 * removes the class 'flip' and calls reset function
 * Added timer for execution
 */
function unflipCards() {
    lockboard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetboard();
    }, 800);
  }

function resetboard () {

    lockboard = false;
    firstCard = null;
    secondCard = null;

}
