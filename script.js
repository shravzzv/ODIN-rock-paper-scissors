// I'm getting pseudocode from the instructions

function getRandomIntInclusive(min, max) {
  // from mdn web docs
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const getComputerChoice = () => {
  // randomly returns either 'Rock', 'Paper' or 'Scissors'
  const choices = {
    1: 'Rock',
    2: 'Paper',
    3: 'Scissors',
  }
  const index = getRandomIntInclusive(1, 3)
  const choice = choices[index]
  return choice
  /*pseudocode 
  Initialize a function getComputerChoice,
  make available choices as 'Rock', 'Paper' or 'Scissors',
  return a random number from computer between 1-3,
  associate computer's random choice with index,
  return a choice
  */
}

const getResult = (player, computer) => {
  // possible choices: Rock, Paper, Scissors
  // Rock > Scissors; Rock < Paper
  // Scissors > Paper; Scissors < Rock
  // Paper > Rock; Paper < Scissors
  if (player === 'rock') {
    if (computer === 'rock') {
      return 'DRAW!'
    } else if (computer === 'scissors') {
      return 'You Win! Rock beats Scissors'
    } else if (computer === 'paper') {
      return 'You Lose! Paper beats Rock'
    }
  } else if (player === 'paper') {
    if (computer === 'paper') {
      return 'DRAW!'
    } else if (computer === 'rock') {
      return 'You Win! Paper beats Rock'
    } else if (computer === 'scissors') {
      return 'You Lose! Scissors beats Paper'
    }
  } else if (player === 'scissors') {
    if (computer === 'scissors') {
      return 'DRAW!'
    } else if (computer === 'paper') {
      return 'You Win! Scissors beats Paper'
    } else if (computer === 'rock') {
      return 'You Lose! Rock beats Scissors'
    }
  } else {
    return 'Sorry Invalid choices!'
  }
}

const playRound = (playerSelection, computerSelection) => {
  return getResult(
    playerSelection.toLowerCase(),
    computerSelection.toLowerCase()
  )
}
