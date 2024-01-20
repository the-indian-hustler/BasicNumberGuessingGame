const maxima = prompt("Enter the maximum range till which you want to guess");
const random = Math.floor(Math.random() * maxima) + 1;
let guess;

while (true) {
    guess = prompt("Guess the number");

    if (guess === null || guess.toLowerCase() === "quit") {
        console.log("Quitting");
        break;
    }

    if (parseInt(guess) === random) {
        console.log("Right!");
        break;
    }
    else if(guess > random){
        console.log("enter small number");
    } 
    else if(guess < random){
        console.log("enter larger number");
    }
    else {
        console.log("Wrong, guess again");
    }
}
