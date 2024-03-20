

let imageArray = ["banner", "book", "cyclops", "dead", "dragon", "elf", "gem", "giant", "haunted-house", "hydra", "magic-wand", "moon", "orc", "potions", "red-riding-hood", "skills", "sword", "wizard", "wooden-stick"];

// Declaring all variables
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
const ruleSection = document.getElementById("rule-section");
const difficultyButtons = document.getElementById("difficulty-buttons");
const gameOptions = document.getElementById("game-options");
const gameStart = document.getElementById("game-start")
const question = document.getElementById("home-question");
const score = document.getElementById("score");
const back = document.getElementById ("back");
const resume = document.getElementById("resume");
const ruleButton = document.getElementById("rule-button");
const iButton = document.getElementById("i-button");
const endGame = document.getElementById("end-game");
const gameOver = document.getElementById("game-over");
const winGame = document.getElementById("game-done");
const keepGoing = document.getElementById("one-up");
let lives = document.getElementById("fails");
let lifeLimit= document.getElementById("fail-limit");
let winScore = document.getElementById("win");
let wins = document.getElementById("total-wins");
let easyStreak = document.getElementById("easy-streak");
let midStreak = document.getElementById("medium-streak");
let hardStreak = document.getElementById("hard-streak");
let bestTime = document.getElementById("best-time");
const timer= document.getElementById("timer");
let time = document.getElementById("time");


//Initial display
memoryGame.style.display = "none";
back.style.display = "none";
difficultyButtons.style.display = "none";  
ruleWindow.style.display = "none";
resume.style.display="none";
// gameOver.style.display="none";
// winGame.style.display="none";


// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {

    // level= "";

    // Create array with all buttons
    let buttons = document.getElementsByTagName("button");

    //Add event listener for click
    for (let button of buttons) {
        button.addEventListener("click", function() {

            if (this.getAttribute("data-type") === "back-button") {
                
                homeScreen();

                // To properly reset the timer
                clearInterval(clock);
                timer.innerHTML='0:00';

                // backReset();

            } else if (this.getAttribute("data-type")==="resume"){
                resume.style.display = "none";
        
                gameMode();
                

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
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "medium"){
                level = "medium";
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "hard"){
                level = "hard";
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

                    cardValues = cardValues1
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

    // remove all cards from the container
    cardContainer.innerHTML= "";

    gameMode();
   
    
   
    // To start a timer each time a new game starts.
    // To avoid complications when changing game mode
    if (level === "gradual"){
        gradual=true;
        time.style.display = "block";
        winScore.style.display = "none";
        if (cardValues == cardValues1){
            seconds=0;
            minutes=0;
            clock = setInterval(setTimer, 1000);
        };
    } else { 
        gradual=false;
        winScore.style.display = "block";
        time.style.display = "none";
    }
    
    // To set cardValues for each level
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
   
    // To determine number of lives/level
   if (cardValues === cardValues1){
    lifeLimit.innerText = 3;
   } else if (cardValues === cardValues2){
    lifeLimit.innerText = 4;
   } else { lifeLimit.innerText = 5;
   }


    // Shuffle the card values
    shuffleCards(cardValues);

    // Create and display the cards
    createCards(cardValues);

};

/**
 * For setting timer in Gradual Challenge mode
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
    lockboard=true; // Lock card clicking during reveal
    const cards = Array.from(cardContainer.children)
    cards.forEach((card) => {
        card.classList.add('disabled') //remove hover box shadow from cards
        setTimeout(() => {
            card.classList.add('flip');
            card.style.transform = "rotateY(360deg)";
            }, 500);

        setTimeout(() => {
            card.style.transform = "rotateY(0deg)";
            card.classList.remove('flip');
            resetBoard(); 
          }, 3000);
        
    });
    

};


function flipCard(e, cardValues) {

    const cardElement = e.target;
    
    //prevents the user to click more cards during matching process
    if (lockboard) return; 
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
    // alert('You won')
        // keepGoing.style.display="flex"
        // setTimeout(() => {
        //     
        //     keepGoing.style.display="none"
        //     resetGame()
        // }, 1000);
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
    incrementFails();
    lockboard = true;
    // For the game to not "resetBoard"
    const gameEnded = lives.innerText == lifeLimit.innerText

    //remove hover box shadow from cards when lockboard = true
    const cards = Array.from(cardContainer.children)
    cards.forEach((card) => {
        card.classList.add('disabled')
    })

    setTimeout(() => {
      firstCard.classList.remove('flip');
      firstCard.style.transform = "rotateY(0deg)";
      secondCard.classList.remove('flip');
      secondCard.style.transform = "rotateY(0deg)";
      if (!gameEnded) {
        resetBoard();
      }
    }, 1000);
  };

/**
 * resets the values
 */
function resetBoard () {

    lockboard = false;
    firstCard = null;
    secondCard = null;

    // Remove class to allow hover styling on cards
    const cards = Array.from(cardContainer.children)
    cards.forEach((card) => {
        card.classList.remove('disabled')
    })

};


/**
 * increment lives
 */
function incrementFails() {
    
    let oldFailScore = parseInt(lives.innerText);
    lives.innerText = ++oldFailScore;

    if (lives.innerText == lifeLimit.innerText){
        
        lockboard= true;
        
        const cards = Array.from(cardContainer.children)
        cards.forEach((card) => {
            card.classList.add('disabled');
        });

        gameOver.style.display = "flex";

        setTimeout(() => {
            
            // backReset();
            homeScreen();
        }, 2000); 
        
    };
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

    lives.textContent = 0
    matchedCards = 0;
    


    // this part only works if the user chose a gradually increasing diffiuclty
    if (gradual){
        if (cardValues === cardValues1){
            cardValues = cardValues2;
            // runGame(cardValues); 
            nextLevel(cardValues);
        } else if (cardValues === cardValues2){
            cardValues = cardValues3;
            // runGame(cardValues); 
            nextLevel(cardValues);
        } else if (cardValues === cardValues3){ 
            bestTimeRecord();
            winGame.style.display = "flex";
            setTimeout(() => {
                homeScreen()
                clearInterval(clock);
                timer.innerHTML='0:00';
                // backReset()
                }, 2000); 

            
        }
    } else {
        nextLevel();
        
    }


};


function backReset(){
    resetBoard();

    lives.textContent = 0
    matchedCards = 0;

    cardContainer.innerHTML= "";
    gameOn = false;
};


function nextLevel(cardValues) {
    keepGoing.style.display="flex";
        setTimeout(() => {
            
            keepGoing.style.display="none"
            runGame(cardValues); 
        }, 1000);
};

// Displaying and un-displaying sections for chosen environments.

function gameMode() {
    ruleSection.style.display="none";
    question.style.display = "none";
    gameStart.style.display = "none";
    memoryGame.style.display = "block";
    back.style.display = "block";
    gameOn = true;
};


function homeScreen() {
    ruleSection.style.display="block";
    ruleButton.style.display = "block";
    ruleWindow.style.display = "none";
    question.style.display = "block";
    gameStart.style.display = "flex";
    difficultyButtons.style.display = "none";
    memoryGame.style.display = "none";
    back.style.display = "none";
    gameOver.style.display = "none";
    winGame.style.display="none";
    backReset();
};



function rulesScreen() {
    ruleSection.style.display="block"
    ruleButton.style.display = "none";
    ruleWindow.style.display = "block";
    question.style.display = "none";
    gameStart.style.display = "none";
    memoryGame.style.display = "none";

};