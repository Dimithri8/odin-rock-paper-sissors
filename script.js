function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Sissors";
  }
}

console.log(getComputerChoice());

// Generate a random number from 0 - 2. DONE
// IF the number is 0 return rock. DONE
// IF ELSE the number is 1 return paper. DONE
// ELSE return sissors (ideally the number would be only 2). DONE
