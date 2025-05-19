//!Background music

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");

yesBtn.addEventListener("click", introSong)

function introSong(){
    bgMusic.play();
    document.querySelector("header").style.display = "none"; //!Doing this makes the header disappear. 
};

//* alert is similar to prompt but it does not allow you to type anything. It just pops up a message. 
noBtn.addEventListener("click",goodbye);
function goodbye() {
    alert("Maybe next time!");
    document.querySelector("header").style.display = "none";
    document.querySelector(".battleGrid").style.display = "none";
    document.querySelector("img").style.display = "none";
};



//! Setting up board

const playingGrid = document.querySelectorAll(".clickSq");
const randomGrid = Math.floor(Math.random() * 9);


//? The "Cell" in this case would be the equalivent of the #ClickSq. this is letting you know that all of these are going to be selected.
// * forEach() is used to say like "Hey, for each cell in the grid, something must be done." in this case, the cells are the squares in the DIV's. 

// ? The index is related to where in the #clickSq is located. the ClickSq at this point is an array. 

playingGrid.forEach((cell, index) => {
    cell.addEventListener("click", randomLocation) ;
    function randomLocation(){

        const message = document.getElementById("gameResponse")

        if (index === randomGrid) {
            cell.classList.add("correct");
            cell.innerText = "Ouch!"
            message.innerText = "YOU SUNK THE BATTLESHIP. YOU WIN!!!"

        } else {
            cell.classList.add("incorrect");
            cell.innerText = "Keep Searching..."
            message.innerText = "TRY AGAIN NEXT TIME!"
        }              
    }

});
