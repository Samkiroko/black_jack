let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

function getRandomCard() {
  return Math.floor(Math.random() * 11) + 1
}

function startGame() {
  renderGame()
}
l
function renderGame() {
  cardsEl.textContent = 'Cards: '
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' '
  }
  sumEl.textContent = 'Sum: ' + sum
  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard() {
  console.log('Drawing a new card from the deck')
  let newCard = getRandomCard()
  sum += newCard
  cards.push(newCard)
  console.log(cards)
  renderGame()
}
