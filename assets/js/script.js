
// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {

    const cardValues = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "F"];
    
    const cardContainer = this.getElementById("card-container") ;

    // Shuffle the card values
    cardValues.sort(() => Math.random() - 0.5);


    for (let i of cardValues){
        
    }

})