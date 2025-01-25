// Select all boxes (grid cells) for the game board
let boxes = document.querySelectorAll(".box");

// Select the reset and new game buttons
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new-btn");

// Select the message container and the message element for displaying winner
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Boolean to track the current player's turn; true for 'O', false for 'X'
let turn0 = true;

// Array defining all possible winning patterns
const winPatterns = [
    [0, 1, 2], // Top row
    [0, 3, 6], // Left column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [2, 4, 6], // Diagonal from top-right to bottom-left
    [3, 4, 5], // Middle row
    [6, 7, 8]  // Bottom row
];

// Function to reset the game board and prepare for a new game
const resetGame = () => {
    turn0 = true; // Reset the turn to 'O'
    enabledBoxes(); // Enable all boxes for a new game
    msgContainer.classList.add("hide"); // Hide the winner message
};

// Add click event listeners to all boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");

        // Alternate between 'O' and 'X' based on the turn
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        // Disable the clicked box to prevent overwriting
        box.disabled = true;

        // Check if there's a winner after each move
        checkWinner();
    });
});

// Function to disable all boxes (used when the game is over)
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Function to enable all boxes and clear their content (used for resetting)
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false; // Enable the box
        box.innerText = "";   // Clear the text
    }
};

// Function to display the winner message and disable further interactions
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`; // Display winner
    msgContainer.classList.remove("hide"); // Show the message container
    disabledBoxes(); // Disable all boxes
};

// Function to check if there's a winner based on the current board state
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // Get the values of the boxes for the current winning pattern
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // Check if all three positions are non-empty and have the same value
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner found");
                showWinner(pos1Val); // Display the winner
                return; // Exit after finding a winner
            }
        }
    }
};

// Add event listeners to the Reset and New Game buttons
newGameBtn.addEventListener("click", resetGame); // New Game button resets the game
resetBtn.addEventListener("click", resetGame);   // Reset button does the same
