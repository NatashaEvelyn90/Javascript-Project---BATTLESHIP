//!Background music + Y/N buttons

const yesBtn = document.getElementById("yesBtn"); //? This is the yes button. This will start the game and music
const noBtn = document.getElementById("noBtn");//? This is the no button. This will close everything out 
const bgMusic = document.getElementById("bgMusic"); //? This is the audio.
const victory = document.getElementById("victory"); //? This is the victory theme that will play

yesBtn.addEventListener("click", startGame);//? using this function allows us to start the music and begin the game. SEE FUNCTION BELOW 

//! Setting up board

const playingGrid = document.querySelectorAll(".clickSq");//? this is the <div> squares that you created. We are selecting them.
const randomGrid = Math.floor(Math.random() * 9);//? This is to set up the placement of the battleship. THIS IS THE SHIP. 

//? The word "cell" is basically being used to replace the word #ClickSq. This is letting you know that all of these are going to be selected.
//* forEach() is used to say like "Hey, for each cell in the grid, something must be done." in this case, the "cells" are the squares being selected. 
// ? The "index" word we used is related to where in the #clickSq the battleship located. This would be considered your array. 

let gameOver = false;

function startGame(){
    bgMusic.play();
    document.querySelector("header").style.display = "none"; //! Doing this makes the header disappear. 

    playingGrid.forEach((cell, index) => {
    cell.addEventListener("click", randomLocation) ;
    function randomLocation(){
        if (gameOver) return;

        const message = document.getElementById("gameResponse");

        if (index === randomGrid) {
            //? the .classList.add in this case is adding your styling from your CSS. 
            cell.classList.add("correct");
            cell.innerText = "Ouch!";
            message.innerText = "YOU SUNK THE BATTLESHIP. YOU WIN!!!";
            gameOver = true;

            bgMusic.pause(); //? pauses original music 
            victory.play();

        } else {
            cell.classList.add("incorrect");
            cell.innerText = "Keep Searching..."
            message.innerText = "TRY AGAIN NEXT TIME!"
        }              
    }
    })
}


//* alert is similar to prompt but it does not allow you to type anything. It just pops up whatever message you put in the (). 

noBtn.addEventListener("click",goodbye);

function goodbye() {
    alert("Maybe next time!");
    document.querySelector("header").style.display = "none"; //! removes header. It disappears
    document.querySelector(".battleGrid").style.display = "none"; //! removes the whole grid. No game allowed
    document.querySelector("img").style.display = "none"; //! removes the whole background image. All that would be left is a plain document
};

// -----------------------------------------------------------





//! Refreshes page

const refresh = document.getElementById("resetBtn");
refresh.addEventListener("click", reload);

function reload() {
    window.location.reload();
}