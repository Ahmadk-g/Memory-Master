// const cardValues1 = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];
// const cardValues2 = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
// const cardValues3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

let imageArray = ["banner", "book", "cyclops", "dead", "dragon", "elf", "gem", "giant", "haunted-house", "hydra", "magic-wand", "moon", "orc", "potions", "red-riding-hood", "skills", "sword", "wizard", "wooden-stick"];

// const cardValuesImgs1 = [] ["wizard", "wizard", "sword", "sword", "potions", "potions", "orc", "orc", "hydra", "elf", "hydra", "elf"]
// const cardValuesImgs2 = [...cardValuesImgs1, ]
// const cardValuesImgs3 = [...cardValuesImgs2, ]

let cardValuesImgs1 = [];
let cardValues1 = []; 
let cardValues2 = []; 
let cardValues3 = []; 

let cardValues;
var firstCard;
var secondCard;
var chosenCard;
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

                

                clearInterval(clock);
                timer.innerHTML='0:00';

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

                // imageArray.sort( () => Math.random() - 0.5);
                // cardValues = cardValues1;
                //cardValuesImgs1 = imageArray.sort(function() { return 0.5 - Math.random() });
                // cardValues1 = imageArray.slice(0,6);
                // cardValues = [...cardValues1, ...cardValues1]
                // cardValues = Array.from({ length: 2 }, () => [...cardValuesImgs1]).flat();

                
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "medium"){
                level = "medium";
                // cardValues = cardValues2;
                // imageArray.sort( () => Math.random() - 0.5);
                // cardValues2 = imageArray.slice(0,8);
                // cardValues = [...cardValues2, ...cardValues2]

                cardContainer.innerHTML= "";
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "hard"){
                level = "hard";
                // cardValues = cardValues3;
                // imageArray.sort( () => Math.random() - 0.5);
                // cardValues3 = imageArray.slice(0,8);
                // cardValues = [...cardValues3, ...cardValues3]

                cardContainer.innerHTML= "";
                runGame(cardValues);

            } else if (this.getAttribute("data-type") === "difficulty-level"){
                if (difficultyButtons.style.display === "flex"){
                    difficultyButtons.style.display = "none";
                } else {
                    difficultyButtons.style.display = "flex";
                }
                
            } else if (this.getAttribute("data-type") === "gradual"){
                    // timer.innerHTML= "0:00";

                    level = "gradual";
                    // winScore.style.display = "none";
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
   

   
    if (level === "gradual"){
        time.style.display = "block";
        winScore.style.display = "none";
        if (cardValues == cardValues1){
            // clearInterval(clock);
            // timer.innerHTML='0:00';
            seconds=0;
            minutes=0;
            clock = setInterval(setTimer, 1000);
        };
    } else { 
        winScore.style.display = "block";
        time.style.display = "none";
    }
    
    // timer.style.display = "block";

    // counter.innerHTML="";
    
    // countdown();

    imageArray.sort( () => Math.random() - 0.5);

    if (level === "easy"){
        cardValues1 = imageArray.slice(0,6);
        cardValues = [...cardValues1, ...cardValues1];
        console.log(cardValues);
    } else if ( level === "medium"){
        cardValues2 = imageArray.slice(0,8);
        cardValues = [...cardValues2, ...cardValues2]
    } else if (level === "hard") {
        cardValues3 = imageArray.slice(0,8);
        cardValues = [...cardValues3, ...cardValues3]
    };

    console.log(cardValues.length)
    console.log(typeof cardValues)
    console.log(cardValues)
   

    // Shuffle the card values
    shuffleCards(cardValues);

    // Create and display the cards
    createCards(cardValues);

};


function setTimer() {
    // setInterval(() => {
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes ++;
        }

        const timeFormat = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

        timer.textContent = timeFormat;
    // }, 1000)
}

function bestTimeRecord(){
    let minuteB = (bestTime.innerText[0]);
    let tenthB = (bestTime.innerText[2]);
    let secondB = (bestTime.innerText[3]);
    console.log(minuteB, tenthB, secondB);
    let minuteT = (timer.innerText [0]);
    let tenthT = (timer.innerText [2]);
    let secondT = (timer.innerText [3]);
    console.log(minuteT, tenthT, secondT);

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
 * Shuffle cards using math random
 */
function shuffleCards(cardValues) {
    cardValues.sort(() => Math.random() - 0.5);

    // imageArray.sort( () => Math.random() - 0.5);
    

    // if (level === "easy"){
        
    //     cardValuesImgs1 = imageArray.slice(0,6);
       
    //     cardValues = Array.from({ length: 2 }, () => [...cardValuesImgs1]).flat();
    //     console.log(cardValues)

    // };
    //             // cardValuesImgs1 = cardValuesImgs1.slice(0,6);
    //             // 
    
};

/**
 * Create and display cards
 */

function createCards(cardValues) {
    // console.log("this is the array", cardValues);
    console.log(cardValues.length);
    cardValues.forEach((value) => {
        const card = document.createElement('div');
        card.classList.add('card');
        // const valueElement = document.createElement('div');
        const valueElement = document.createElement('img');
        valueElement.classList.add('value')
        // valueElement.textContent = value;
        valueElement.setAttribute('src', `assets/images/cardIcons/${value}.png`)
        card.appendChild(valueElement);
        card.addEventListener('click', (e) => flipCard(e, cardValues)); // Event listener added, so that clicked card undergoes function.
        
        cardContainer.appendChild(card);
    });
    console.log(typeof cardValues)

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
    console.log('cardValues flipCard', cardValues)
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
    // console.log('firstCard', firstCard)
    // console.log('secondCard', secondCard)
    const isMatch = firstCard.innerHTML === secondCard.innerHTML;
    // console.log(isMatch);

    isMatch ? lockCards(cardValues) : unflipCards();
};

/**
 * disable clicking event for matching cards
 */
function lockCards(cardValues) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    console.log(firstCard);
    console.log(secondCard);
    matchedCards += 2;
    console.log(matchedCards);
    console.log('cardValues from lockCards', cardValues)

    // matchedCards == cardValues.length ? resetGame() : resetBoard();
   if ( matchedCards === cardValues.length ) {
    alert('You won')
    incrementWins();
    resetGame()
    } else { 
        resetBoard();
    };

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
            runGame(cardValues); 
        } else if (cardValues === cardValues2){
            cardValues = cardValues3;
            runGame(cardValues); 
        } else {
            console.log("supposed to end");
            bestTimeRecord();
            // alert("game is done");

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

            

            clearInterval(clock);
            timer.innerHTML='0:00';

            backReset()
        }
    } else {
        runGame(cardValues); 
    }


    
   //instead of below code
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
