console.log("Welcome to Black Jack!");

// let randomNum = Math.random();
// let min = randomNum * 13;
// let floor = Math.floor(min);
// let final = floor + 1;

// let randomNumFast = Math.floor(Math.random() * 13) + 1;
// console.log(randomNumFast);

let gameRun = true;
let gameNum = 0;

while (gameRun) {
    gameNum++;
    console.log(`START GAME #${gameNum}`);
    console.log('');

    // deal a card to the player
    let playerHand = 0;
    let randomCard = Math.floor(Math.random() * 13) + 1; // [1, 13]

    if (randomCard === 1) {
        playerHand = randomCard;
        console.log("Your card is an ACE!");
        console.log(`Your hand is ${playerHand}`);
    }
    else if (randomCard >= 2 || randomCard <= 10) {
        if (randomCard === 2) {
            playerHand += randomCard;
            console.log("Your card is a 2");
            console.log(`Your hand is ${playerHand}`);
        } else if (randomCard === 3) {
            playerHand += randomCard;
            console.log("Your card is a 3");
            console.log(`Your hand is ${playerHand}`);
        } else if (randomCard === 4) {
            playerHand += randomCard;
            console.log("Your card is a 4");
            console.log(`Your hand is ${playerHand}`);
        } else if (randomCard === 5) {
            playerHand += randomCard;
            console.log("Your card is a 5");
            console.log(`Your hand is ${playerHand}`);
        } else if (randomCard === 6) {
            playerHand += randomCard;
            console.log("Your card is a 6");
            console.log(`Your hand is ${playerHand}`);
        } else if (randomCard === 7) {
            playerHand += randomCard;
            console.log("Your card is a 7");
            console.log(`Your hand is ${playerHand}`);
        } else if (randomCard === 8) {
            playerHand += randomCard;
            console.log("Your card is a 8");
            console.log(`Your hand is ${playerHand}`);
        } else if (randomCard === 9) {
            playerHand += randomCard;
            console.log("Your card is a 9");
            console.log(`Your hand is ${playerHand}`);
        } else if (randomCard === 10) {
            playerHand += randomCard;
            console.log("Your card is a 10");
            console.log(`Your hand is ${playerHand}`);
        }
    }
    else if (randomCard > 10 && randomCard < 14) {
        if (randomCard === 11) {
            playerHand += randomCard;
            console.log("Your card is a JACK!");
            console.log(`Your hand is ${playerHand}`);
        } else if (randomCard === 12) {
            playerHand += randomCard;
            console.log("Your card is a QUEEN!");
            console.log(`Your hand is ${playerHand}`);
        } else if (randomCard === 13) {
            playerHand += randomCard;
            console.log("Your card is a KING!");
            console.log(`Your hand is ${playerHand}`);
        }
    }

    let mainGameBegin = true;
    while (mainGameBegin) {
        console.log("(1) Hit");
        console.log("(2) Stand");
        console.log("(3) Show Statistics");
        console.log("(4) Exit");
        console.log('');

        let userInput = prompt("Enter between (1-4)");
        if (userInput === '1') {
            if (randomCard === 1) {
                playerHand = randomCard;
                console.log("Your card is an ACE!");
                console.log(`Your hand is ${playerHand}`);
            }
            else if (randomCard >= 2 || randomCard <= 10) {
                if (randomCard === 2) {
                    playerHand += randomCard;
                    console.log("Your card is a 2");
                    console.log(`Your hand is ${playerHand}`);
                } else if (randomCard === 3) {
                    playerHand += randomCard;
                    console.log("Your card is a 3");
                    console.log(`Your hand is ${playerHand}`);
                } else if (randomCard === 4) {
                    playerHand += randomCard;
                    console.log("Your card is a 4");
                    console.log(`Your hand is ${playerHand}`);
                } else if (randomCard === 5) {
                    playerHand += randomCard;
                    console.log("Your card is a 5");
                    console.log(`Your hand is ${playerHand}`);
                } else if (randomCard === 6) {
                    playerHand += randomCard;
                    console.log("Your card is a 6");
                    console.log(`Your hand is ${playerHand}`);
                } else if (randomCard === 7) {
                    playerHand += randomCard;
                    console.log("Your card is a 7");
                    console.log(`Your hand is ${playerHand}`);
                } else if (randomCard === 8) {
                    playerHand += randomCard;
                    console.log("Your card is a 8");
                    console.log(`Your hand is ${playerHand}`);
                } else if (randomCard === 9) {
                    playerHand += randomCard;
                    console.log("Your card is a 9");
                    console.log(`Your hand is ${playerHand}`);
                } else if (randomCard === 10) {
                    playerHand += randomCard;
                    console.log("Your card is a 10");
                    console.log(`Your hand is ${playerHand}`);
                }
            }
            else if (randomCard > 10 && randomCard < 14) {
                if (randomCard === 11) {
                    playerHand += randomCard;
                    console.log("Your card is a JACK!");
                    console.log(`Your hand is ${playerHand}`);
                } else if (randomCard === 12) {
                    playerHand += randomCard;
                    console.log("Your card is a QUEEN!");
                    console.log(`Your hand is ${playerHand}`);
                } else if (randomCard === 13) {
                    playerHand += randomCard;
                    console.log("Your card is a KING!");
                    console.log(`Your hand is ${playerHand}`);
                }
            }

            if (playerHand === 21) {
                console.log("BLACKJACK YOU WIN!");
                mainGameBegin = false;
                continue;
            }
            else if (playerHand > 21) {
                console.log("You exceeded 21! You lose.");
            }
        }
        if (userInput === '2') {
            let dealerHand = Math.floor(Math.random() * 17) + 9;  // [17-26]
            if (dealerHand < playerHand) {
                console.log(`Dealer has ${dealerHand}, YOU WIN!`);
            }
            else if (dealerHand > playerHand) {
                console.log(`Dealer has ${dealerHand}, You Lose.`);
            }
            else if (dealerHand === playerHand) {
                console.log(`Both have ${dealerHand}=${playerHand}, TIE!`);
            }
            else if (dealerHand > 21) {
                console.log(`Dealer has too much ${dealerHand}, YOU WIN!`);
            }
        }
        if (userInput == '4') {
            console.log("close");
            mainGameBegin = false;
            gameRun = false;
        }
    }
}
console.log("we are done!!!");