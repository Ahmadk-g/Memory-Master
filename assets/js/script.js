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
let gameOn = false;
let level = "";

const cardContainer = document.getElementById("card-container") ;
const memoryGame = document.getElementById ("memory-game");
const ruleArea = document.getElementById("rule-area");
const ruleWindow = document.getElementById("rule-window");
const difficultyButtons = document.getElementById("difficulty-buttons");
const gameOptions = document.getElementById("game-options");
const gameStart = document.getElementById("game-start")
const question = document.getElementById("home-question");
const score = document.getElementById("score");
const back = document.getElementById ("back");
const resume = document.getElementById("resume");
const ruleButton = document.getElementById("rule-button");
const iButton = document.getElementById("i-button");
// const timer = document.getElementById("timer");
// const counter = document.getElementById("counter");
let mistakes = document.getElementById("fails");
let wins = document.getElementById("total-wins");
let easyStreak = document.getElementById("easy-streak");
let midStreak = document.getElementById("medium-streak");
let hardStreak = document.getElementById("hard-streak");

memoryGame.style.display = "none";
back.style.display = "none";
difficultyButtons.style.display = "none";  // initially don't show them.
ruleWindow.style.display = "none";
iButton.style.display="none";
resume.style.display="none"
// ruleArea.style.display="none";
// timer.style.display = "none";



// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {

    level= "";

    // Create array with all buttons
    let buttons = document.getElementsByTagName("button");


    // cardValues = cardValues1;

    for (let button of buttons) {
        button.addEventListener("click", function() {

            if (this.getAttribute("data-type") === "back-button") {
                gameOptions.style.display = "flex";
                gameStart.style.display = "flex";
                question.style.display = "block";
                memoryGame.style.display = "none";
                back.style.display = "none";
                difficultyButtons.style.display = "none";
                ruleWindow.style.display = "none";
                ruleButton.style.display = "block";
                // iButton.style.display = "none";
                // timer.style.display = "none"
                backReset()

            } else if (this.getAttribute("data-type")==="resume"){
                resume.style.display = "none";
                memoryGame.style.display = "block";
                back.style.display= "block";
                ruleWindow.style.display = "none";
                

            } else if (this.getAttribute("data-type")==="rules") {
                ruleWindow.style.display = "block";
                gameStart.style.display = "none";
                memoryGame.style.display = "none";
                question.style.display = "none";
                gameOptions.style.display = "none";
                ruleButton.style.display = "none";
                // back.style.display = "none";
                if (gameOn){
                    resume.style.display = "block";
                    back.style.display="none"
                } else {
                    back.style.display = "block";
                }

            } else if (this.getAttribute("data-type") === "easy") {
                level = "easy";
                cardContainer.innerHTML= "";
                cardValues = cardValues1;

                
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "medium"){
                level = "medium";
                cardValues = cardValues2;
                cardContainer.innerHTML= "";
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "hard"){
                level = "hard";
                cardValues = cardValues3;
                cardContainer.innerHTML= "";
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "difficulty-level"){
                if (difficultyButtons.style.display === "flex"){
                    difficultyButtons.style.display = "none";
                } else {
                    difficultyButtons.style.display = "flex";
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
    gameStart.style.display = "none";
    question.style.display = "none";
    score.style.display = "flex";
    memoryGame.style.display = "block";
    back.style.display = "block";
    ruleButton.style.display="none";
    iButton.style.display = "block"
    gameOn = true;
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

    initialFlipAll();
    
}

function initialFlipAll () {
    const cards = Array.from(cardContainer.children)
    cards.forEach((card) => {
        
        setTimeout(() => {
            card.classList.add('flip');
            card.style.transform = "rotateY(360deg)";
            }, 500);

        setTimeout(() => {
            card.style.transform = "rotateY(0deg)";
            card.classList.remove('flip');
          }, 3000);
        
    });
};


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

    // matchedCards == cardValues.length ? resetGame() : resetBoard();

   if ( matchedCards == cardValues.length ) {
    alert('You won')
    incrementWins();
    resetGame()} else { 
        resetBoard();
    }

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
      firstCard.style.transform = "rotateY(0deg)";
      secondCard.classList.remove('flip');
      secondCard.style.transform = "rotateY(0deg)";
      incrementFails();

      resetBoard();
    }, 1000);
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

    // if (mistakes.innerText == 5){
    //     resetGame();
    //     alert("Game Over")
    // }
}

/**
 * increment game score
 */
function incrementWins() {
    let oldWinScore = parseInt(wins.innerText);
    wins.innerText = ++oldWinScore;

    if (level === "easy") {
        let oldStreak = parseInt(easyStreak.innerText);
        if (parseInt(wins.innerText) > oldStreak){
            easyStreak.innerText = wins.innerText
        };
    } else if (level === "medium") {
        let oldStreak = parseInt(midStreak.innerText);
        if (parseInt(wins.innerText) > oldStreak){
            midStreak.innerText = wins.innerText
        };
    } else if (level === "hard") {
        let oldStreak = parseInt(hardStreak.innerText);
        if (parseInt(wins.innerText) > oldStreak){
            hardStreak.innerText = wins.innerText
        };
    };
}



/**
 * Resets the game
 * Cards are shuffled again and mistake score is reset
 */
function resetGame(){

    // incrementWins();
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


function backReset(){
    resetBoard();

    mistakes.textContent = 0
    matchedCards = 0;

    cardContainer.innerHTML= "";
    gameOn = false;
}

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
