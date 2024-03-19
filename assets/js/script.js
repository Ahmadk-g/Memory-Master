

let imageArray = ["banner", "book", "cyclops", "dead", "dragon", "elf", "gem", "giant", "haunted-house", "hydra", "magic-wand", "moon", "orc", "potions", "red-riding-hood", "skills", "sword", "wizard", "wooden-stick"];

let cardValues1 = []; 
let cardValues2 = []; 
let cardValues3 = []; 

let cardValues;
var firstCard;
var secondCard;
let matchedCards = 0;
let lockboard = true;
let gradual = false;
let gameOn = false;
let level = "";
let clock;

let seconds = 0;
let minutes = 0;

const cardContainer = document.getElementById("card-container") ;
const memoryGame = document.getElementById ("memory-game");
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
let mistakes = document.getElementById("fails");
let winScore = document.getElementById("win");
let wins = document.getElementById("total-wins");
let easyStreak = document.getElementById("easy-streak");
let midStreak = document.getElementById("medium-streak");
let hardStreak = document.getElementById("hard-streak");
let bestTime = document.getElementById("best-time");
const timer= document.getElementById("timer");
let time = document.getElementById("time");


memoryGame.style.display = "none";
back.style.display = "none";
difficultyButtons.style.display = "none";  // initially don't show them.
ruleWindow.style.display = "none";
iButton.style.display="none";
resume.style.display="none";
time.style.display= "none";



// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {

    level= "";

    // Create array with all buttons
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {

            if (this.getAttribute("data-type") === "back-button") {
                
                homeScreen();

                // To properly reset the timer
                clearInterval(clock);
                timer.innerHTML='0:00';

                backReset();

            } else if (this.getAttribute("data-type")==="resume"){
                resume.style.display = "none";
                memoryGame.style.display = "block";
                back.style.display= "block";
                ruleWindow.style.display = "none";
                

            } else if (this.getAttribute("data-type")==="rules") {

                rulesScreen();

                // To differentiate between going to homescreen or resume game.
                if (gameOn){
                    resume.style.display = "block";
                    back.style.display="none"
                } else {
                    back.style.display = "block";
                }

            } else if (this.getAttribute("data-type") === "easy") {
                level = "easy";
                cardContainer.innerHTML= "";
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "medium"){
                level = "medium";
                cardContainer.innerHTML= "";
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "hard"){
                level = "hard";
                cardContainer.innerHTML= "";
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "difficulty-level"){
                if (difficultyButtons.style.display === "flex"){
                    difficultyButtons.style.display = "none";
                } else {
                    difficultyButtons.style.display = "flex";
                }
                
            } else if (this.getAttribute("data-type") === "gradual"){
                    setCardValues()
                    level = "gradual";
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

    gameMode();
   
    gameOn = true;
   
   
    if (level === "gradual"){
        time.style.display = "block";
        winScore.style.display = "none";
        if (cardValues == cardValues1){

            seconds=0;
            minutes=0;
            clock = setInterval(setTimer, 1000);
        };
    } else { 
        winScore.style.display = "block";
        time.style.display = "none";
    }
    

     imageArray.sort( () => Math.random() - 0.5);

   
    if (level === "easy"){
        setCardValues()
        cardValues= cardValues1;
   
    } else if ( level === "medium"){
        setCardValues()
        cardValues= cardValues2;

    } else if (level === "hard") {
        setCardValues()
        cardValues= cardValues3;
    };
   
   

    // Shuffle the card values
    shuffleCards(cardValues);

    // Create and display the cards
    createCards(cardValues);

};

/**
 * For setting timer in Gradual mode
 */
function setTimer() {
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes ++;
        }

        const timeFormat = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

        timer.textContent = timeFormat;
}


/**
 * For updating the Best time inner text
 */
function bestTimeRecord(){
    let minuteB = (bestTime.innerText[0]);
    let tenthB = (bestTime.innerText[2]);
    let secondB = (bestTime.innerText[3]);

    let minuteT = (timer.innerText [0]);
    let tenthT = (timer.innerText [2]);
    let secondT = (timer.innerText [3]);


    if (bestTime.innerText==="0:00"){
        bestTime.innerText = timer.innerText;
    }

    if (parseInt(minuteB)>parseInt(minuteT)){
       bestTime.innerText = timer.innerText;
    } else if (parseInt(tenthB)>parseInt(tenthT)){
        bestTime.innerText = timer.innerText;
    } else if (parseInt(secondB)>parseInt(secondT)){
        bestTime.innerText = timer.innerText;
    }
    
}


/**
 * Assigning values to different cardValue arrays
 */
function setCardValues(){
    imageArray.sort( () => Math.random() - 0.5);
        
    cardValues1 = imageArray.slice(0,6);
    cardValues1 = [...cardValues1, ...cardValues1];
 
    cardValues2 = imageArray.slice(0,8);
    cardValues2 = [...cardValues2, ...cardValues2];

    cardValues3 = imageArray.slice(0,10);
    cardValues3 = [...cardValues3, ...cardValues3];

}

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
        const valueElement = document.createElement('img');
        valueElement.classList.add('value')
        valueElement.setAttribute('src', `assets/images/cardIcons/${value}.png`)
        card.appendChild(valueElement);
        card.addEventListener('click', (e) => flipCard(e, cardValues)); // Event listener added, so that clicked card undergoes function.
        
        cardContainer.appendChild(card);
    });


    initialFlipAll();
    
};

function initialFlipAll () {
    const cards = Array.from(cardContainer.children)
    cards.forEach((card) => {
        
        setTimeout(() => {
            card.classList.add('flip');
            card.style.transform = "rotateY(360deg)";
            }, 500);

        setTimeout(() => {
            lockboard=false;
            card.style.transform = "rotateY(0deg)";
            card.classList.remove('flip');
          }, 3000);
        
    });
    

};


function flipCard(e, cardValues) {

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
    checkForMatch(cardValues);



};

/**
 * Function that checks if the first and second card match
 */
function checkForMatch(cardValues){

    const isMatch = firstCard.innerHTML === secondCard.innerHTML;


    isMatch ? lockCards(cardValues) : unflipCards();
};

/**
 * disable clicking event for matching cards
 */
function lockCards(cardValues) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matchedCards += 2;


 
   if ( matchedCards === cardValues.length ) {
    alert('You won')
    incrementWins();
    resetGame()
    } else { 
        resetBoard();
    };

   
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

    if (mistakes.innerText == 5){
        alert("Game Over");
        resetGame();
        homeScreen();
       
    }
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

    resetBoard();

    mistakes.textContent = 0
    matchedCards = 0;
    
    // remove all cards from the container
    cardContainer.innerHTML= "";

    // this part only works if the user chose a gradually increasing diffiuclty
    if (gradual){
        if (cardValues === cardValues1){
            cardValues = cardValues2;
            runGame(cardValues); 
        } else if (cardValues === cardValues2){
            cardValues = cardValues3;
            runGame(cardValues); 
        } else {
            bestTimeRecord();
            alert("game is done");

            homeScreen()

            clearInterval(clock);
            timer.innerHTML='0:00';

            backReset()
        }
    } else {
        runGame(cardValues); 
    }


};


function backReset(){
    resetBoard();

    mistakes.textContent = 0
    matchedCards = 0;

    cardContainer.innerHTML= "";
    gameOn = false;
};

function gameMode() {
    gameOptions.style.display = "none";
    gameStart.style.display = "none";
    question.style.display = "none";
    score.style.display = "flex";
    memoryGame.style.display = "block";
    back.style.display = "block";
    ruleButton.style.display="none";
    iButton.style.display = "block"
};

function homeScreen() {
    gameOptions.style.display = "flex";
    gameStart.style.display = "flex";
    question.style.display = "block";
    memoryGame.style.display = "none";
    back.style.display = "none";
    difficultyButtons.style.display = "none";
    ruleWindow.style.display = "none";
    ruleButton.style.display = "block";
};

function rulesScreen() {
    ruleWindow.style.display = "block";
    gameStart.style.display = "none";
    memoryGame.style.display = "none";
    question.style.display = "none";
    gameOptions.style.display = "none";
    ruleButton.style.display = "none";
};