const playingGrid = document.querySelectorAll("#clickSq");
const squares = 9;
let battleship;
console.log(squares)

function randomLocation() {
    return Math.floor(Math.random() * squares);
}


// squares.addEventListener("click", playGames);

// function playGames() {
// battleship = randomLocation();
// }
// playGames();
// randomLocation();


// function squareScramble(array) {
//     return Math.floor(Math.random() * array.length);
// }
// const specialArray = [0,1,2,3,4,5,6,7,8];
// const specialSquares = squareScramble(specialArray);
// // console.log(specialSquares);


// let pickSquares = document.querySelectorAll("#clickSq");
// pickSquares.addEventListener("click", playGames);

// function playGames() {
//     let bFound = document.querySelector(".correct");
//     let bLost = document.querySelector(".incorrect");

//     for (i = 0; i < pickSquares.length; i++) {
//         if (specialSquares === bFound) {
//             pickSquares[i].style.color = "green"
//         } else if (specialSquares === bLost) {
//             pickSquares[i].style.color = "red"
//         }
//     }
//  }
//  playGames();
