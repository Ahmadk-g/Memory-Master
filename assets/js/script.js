const cardValues1 = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];
const cardValues2 = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
const cardValues3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

let cardValues;
var firstCard;
var secondCard;
var chosenCard;
let matchedCards = 0;
let lockboard = false;
let gradual = false;

const cardContainer = document.getElementById("card-container") ;
const memoryGame = document.getElementById ("memory-game");
const difficultyButtons = document.getElementById("difficulty-buttons");
const gameOptions = document.getElementById("game-options");
const question = document.getElementById("home-question");
const score = document.getElementById("score");
const back = document.getElementById ("back");
// const timer = document.getElementById("timer");
// const counter = document.getElementById("counter");
let mistakes = document.getElementById("fails");
let wins = document.getElementById("total-wins");

memoryGame.style.display = "none";
back.style.display = "none";
difficultyButtons.style.display = "none";  // initially don't show them.
// timer.style.display = "none";


// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {

    // Create array with all buttons
    let buttons = document.getElementsByTagName("button");


    // cardValues = cardValues1;

    for (let button of buttons) {
        button.addEventListener("click", function() {

            if (this.getAttribute("data-type") === "back-button") {
                gameOptions.style.display = "block";
                question.style.display = "block";
                memoryGame.style.display = "none";
                back.style.display = "none";
                difficultyButtons.style.display = "none"
                // timer.style.display = "none"

            } else if (this.getAttribute("data-type") === "easy") {
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

            } else if (this.getAttribute("data-type") === "difficulty-level"){
                if (difficultyButtons.style.display === "block"){
                    difficultyButtons.style.display = "none";
                } else {
                    difficultyButtons.style.display = "block";
                }
                
            } else if (this.getAttribute("data-type") === "gradual"){
                    gradual = true;
                    cardValues = cardValues1
                    cardContainer.innerHTML= "";
                    runGame(cardValues);
                }
            
            //Game wins returns to 0 whenever a new diffiuclty is chosen
            wins.textContent = 0;

            });
        }; 

});

/**
 * function that is called to start a new game
 */
function runGame(cardValues) { 
    gameOptions.style.display = "none";
    question.style.display = "none";
    score.style.display = "flex";
    memoryGame.style.display = "block";
    back.style.display = "block";
    // timer.style.display = "block";

    // counter.innerHTML="";
    
    // countdown();

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

        const valueElement = document.createElement('div');
        valueElement.classList.add('value')
        valueElement.textContent = value;
        
        card.appendChild(valueElement);   
        card.addEventListener('click', flipCard); // Event listener added, so that clicked card undergoes function.
        cardContainer.appendChild(card);
      });
}


function flipCard (e) {
    const cardElement = e.target;

    if (lockboard) return; //prevents the user to click more cards during matching process
    if (cardElement === firstCard) return;

    cardElement.classList.add("flip");
    cardElement.style.transform = "rotateY(360deg)";

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
      incrementFails();

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


/**
 * increment mistakes
 */
function incrementFails() {
    
    let oldFailScore = parseInt(mistakes.innerText);
    mistakes.innerText = ++oldFailScore;
}

/**
 * increment game score
 */
function incrementWins() {
    let oldWinScore = parseInt(wins.innerText);
    wins.innerText = ++oldWinScore;
}


/**
 * Resets the game
 * Cards are shuffled again and mistake score is reset
 */
function resetGame(){
    alert('You won')
    incrementWins();
    resetBoard();

    mistakes.textContent = 0
    matchedCards = 0;
    
    // remove all cards from the container
    cardContainer.innerHTML= "";

    // this part only works if the user chose a gradually increasing diffiuclty
    if (gradual){
        if (cardValues === cardValues1){
            cardValues = cardValues2;
        } else if (cardValues === cardValues2){
            cardValues = cardValues3;
        } else {
            alert("game is done");
        }
    }

    
    runGame(cardValues); //instead of below code
    // //shuffle and recreate the cards
    // shuffleCards(cardValues);

    // createCards(cardValues);
};

/**
 * https://codepen.io/masudrana2779/pen/GRqzPdZ
 * function for a countdown
 */
// function countdown() {
//     var seconds = 59;
//     function tick() {
//       var counter = document.getElementById("counter");
//       counter.innerHTML ="";
//       seconds--;
//       counter.innerHTML =
//         "0:" + (seconds < 10 ? "0" : "") + String(seconds);
//       if (seconds > 0) {
//         setTimeout(tick, 1000);
//       } else {
//         document.getElementById("counter").innerHTML = "";
//       };
//     };
   
//     tick();
// }
