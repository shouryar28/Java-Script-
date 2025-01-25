// Initialize scores for the user and computer
let userScore = 0;
let compScore = 0;

// Select all choice buttons (rock, paper, scissors) and the message display area
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Select the elements to display the user and computer scores
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate a random choice for the computer
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Array of possible choices
    const randIdx = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2
    return options[randIdx]; // Return the computer's choice
}

// Function to handle a draw scenario
const drawGame = () => {
    console.log("Game Draw");
    msg.innerText = "Game Draw!"; // Display "Game Draw" message
    msg.style.backgroundColor = "#081b31"; // Change background color to indicate a draw
}

// Function to handle the game logic when the user makes a choice
const playGame = (userChoice) => {
    console.log("User choice =", userChoice); // Log the user's choice

    // Generate the computer's choice
    const compChoice = genCompChoice();
    console.log("Computer's choice =", compChoice); // Log the computer's choice

    // Check if the game is a draw
    if (userChoice === compChoice) {
        drawGame(); // Handle a draw scenario
    } else {
        let userWin = true; // Assume the user wins by default

        // Determine the winner based on the user's and computer's choices
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true; // Rock loses to paper, wins against scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true; // Paper loses to scissors, wins against rock
        } else {
            userWin = compChoice === "rock" ? false : true; // Scissors lose to rock, win against paper
        }

        // Display the result based on whether the user wins or loses
        showWinner(userWin);
    }
}

// Function to display the winner and update scores
const showWinner = (userWin) => {
    if (userWin) {
        userScore++; // Increment the user's score
        userScorePara.innerText = userScore; // Update the user's score display
        console.log("You Win!");
        msg.innerText = "You Win!"; // Display "You Win" message
        msg.style.backgroundColor = "green"; // Change background color to green
    } else {
        compScore++; // Increment the computer's score
        compScorePara.innerText = compScore; // Update the computer's score display
        console.log("Computer Win!");
        msg.innerText = "Computer Win!"; // Display "Computer Win" message
        msg.style.backgroundColor = "red"; // Change background color to red
    }
}

// Add a click event listener to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get the ID of the clicked button (rock, paper, scissors)
        playGame(userChoice); // Start the game with the user's choice
    });
});
