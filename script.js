const buttons = document.querySelectorAll('.button')
const computerChoiceElement = document.querySelector('.computer-choice')
const resultElement = document.querySelector('.result')
const playerScoreElement = document.querySelector('.player-score')
const computerScoreElement = document.querySelector('.computer-score')

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    playRound(e.target.textContent.toLowerCase(), getComputerChoice())
    game(e.target.textContent.toLowerCase())
  })
)

let round = 0
let playerScore = 0
let computerScore = 0

function getRandomIntInclusive(min, max) {
  // from mdn web docs
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const getComputerChoice = () => {
  const choices = ['rock ✊', 'paper ✋', 'scissors ✌️']
  const index = getRandomIntInclusive(0, 2)
  computerChoiceElement.innerText = choices[index]
  return choices[index]
}

const getResult = (player, computer) => {
  const choices = ['rock ✊', 'paper ✋', 'scissors ✌️']
  if (player === choices[0]) {
    if (computer === choices[0]) {
      return `Draw.`
    } else if (computer === choices[1]) {
      return `You Lose.`
    } else {
      return `You Win!`
    }
  } else if (player === choices[1]) {
    if (computer === choices[1]) {
      return `Draw.`
    } else if (computer === choices[2]) {
      return `You Lose.`
    } else {
      return `You Win!`
    }
  } else if (player === choices[2]) {
    if (computer === choices[2]) {
      return `Draw.`
    } else if (computer === choices[0]) {
      return `You Lose.`
    } else {
      return `You Win!`
    }
  } else {
    return 'Sorry Invalid choices!'
  }
}

const playRound = (player, computer) => {
  const result = getResult(player, computer)
  if (result.includes('W')) {
    playerScore++
  } else if (result.includes('L')) {
    computerScore++
  }
  computerScoreElement.innerText = computerScore
  playerScoreElement.innerText = playerScore
  resultElement.innerText = result
}
