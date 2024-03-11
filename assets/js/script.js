
// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {

    const cardValues = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];
    
    const cardContainer = this.getElementById("card-container") ;

    // Shuffle the card values
    shuffleCards(cardValues);
    
    // Create and display the cards
    cardValues.forEach((value, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', index);
        card.textContent = value;
        cardContainer.appendChild(card);
      });

});


function shuffleCards(cardValues) {
    cardValues.sort(() => Math.random() - 0.5);
}


    
