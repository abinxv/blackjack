let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let firstCard
let secondCard
let sum 
let cards
let isAlive
let isBlackjack

function getRandomCard(){
    let card =  Math.floor(Math.random()*13)+1
    if(card >10) return 10
    else if(card == 1) return 11
    else return card
}

function startGame(){
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard,secondCard]
    isAlive = true
    isBlackjack = false
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++)
    cardsEl.textContent += " " + cards[i]

    sumEl.textContent = "Sum: " + sum

    if(sum<=20){
        message = "do you want a new card?";
    }
    else if(sum == 21){
        message = "you won! you got a blackjack!"
        isBlackjack = true
    }
    else{
        isAlive = false
        message = "you lose! play again?"
        
    }
    messageEl.textContent = message

}

function newCard(){
    if(isAlive && !isBlackjack){        
        let nextCard = getRandomCard()
        cards.push(nextCard)
        sum += nextCard
        renderGame()
    }    
}