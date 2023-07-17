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

console.log(getComputerChoice())
