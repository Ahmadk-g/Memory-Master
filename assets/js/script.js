const cardValues1 = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];
const cardValues2 = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
const cardValues3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

let CardValues;

const cardContainer = document.getElementById("card-container") ;

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {


    cardValues = cardValues1;

    // check which difficulty button has been pressed
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "easy") {
                cardContainer.innerHTML= "";
                cardValues = cardValues1;
                runGame(cardValues);
            } else if (this.getAttribute("data-type") === "medium"){
                cardValues = cardValues2;
                cardContainer.innerHTML= "";
                runGame(cardValues);
            } else if (this.getAttribute("data-type") === "hard"){
                cardValues = cardValues3;
                cardContainer.innerHTML= "";
                runGame(cardValues);
            }; 
        });
    };    

});

var firstCard;
var secondCard;
var chosenCard;

let matchedCards = 0;
let lockboard = false;


function runGame(cardValues) { 
    // Shuffle the card values
    shuffleCards(cardValues);

    // Create and display the cards
    createCards(cardValues);
};

/**
 * Shuffle cards using math random
 */
function shuffleCards(cardValues) {
    cardValues.sort(() => Math.random() - 0.5);
};

/**
 * Create and display cards
 */

function createCards(cardValues) {
    cardValues.forEach((value) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = value;
        card.addEventListener('click', flipCard); // Event listener added, so that clicked card undergoes function.
        cardContainer.appendChild(card);
      });
}


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
};

/**
 * disable clicking event for matching cards
 */
function lockCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matchedCards += 2;

    matchedCards == cardValues.length ? resetGame() : resetBoard();

    //resetBoard();
};

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

      resetBoard();
    }, 800);
  };

/**
 * resets the values
 */
function resetBoard () {

    lockboard = false;
    firstCard = null;
    secondCard = null;

};

function resetGame(){
    alert('You won')

    matchedCards=0;
    resetBoard();
    
    // remove all cards from the container
    cardContainer.innerHTML= "";
    
    //shuffle and recreate the cards 
    shuffleCards(cardValues);

    createCards(cardValues);
};
