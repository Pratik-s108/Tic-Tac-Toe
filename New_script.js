let btn1= document.getElementById("btn1")
let btn2= document.getElementById("btn2")
let btn3= document.getElementById("btn3")
let btn4= document.getElementById("btn4")
let btn5= document.getElementById("btn5")
let btn6= document.getElementById("btn6")
let btn7= document.getElementById("btn7")
let btn8= document.getElementById("btn8")
let btn9= document.getElementById("btn9")
let winnerMessage = document.getElementById('winnerMessage');
let winnerText = document.getElementById('winnerText');
let restartButton = document.getElementById('restartButton');


const allbutton = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9]

function setPlayerColor(button) {
    if (button.innerText === 'X') {
        button.style.color = 'red';
    } else if (button.innerText === 'O') {
        button.style.color = 'green';
    }
}

function checkwin(){

    if(btn1.innerText==btn2.innerText &&
        btn1.innerText==btn3.innerText &&
        btn1.innerText !=""
        ){
            // Change the background color of the winning cells
            btn1.style.backgroundColor = "#90ee90"; // Light green
            btn2.style.backgroundColor = "#90ee90";
            btn3.style.backgroundColor = "#90ee90";
            // Display winner message
            winnerText.innerText = `${chance} Wins!`;
            winnerMessage.classList.add('show');
            return true; // Stop further checks
        };
    if(btn4.innerText==btn5.innerText &&
        btn4.innerText==btn6.innerText &&
        btn4.innerText !=""
        ){
            btn4.style.backgroundColor = "#90ee90"; // Light green
            btn5.style.backgroundColor = "#90ee90";
            btn6.style.backgroundColor = "#90ee90";
            // Display winner message
            winnerText.innerText = `${chance} Wins!`;
            winnerMessage.classList.add('show');
            return true; // Stop further checks
        };
    if(btn7.innerText==btn8.innerText &&
        btn7.innerText==btn9.innerText &&
        btn9.innerText !=""
        ){
            btn7.style.backgroundColor = "#90ee90"; // Light green
            btn8.style.backgroundColor = "#90ee90";
            btn9.style.backgroundColor = "#90ee90";
            // Display winner message
            winnerText.innerText = `${chance} Wins!`;
            winnerMessage.classList.add('show');
            return true; // Stop further checks
        };
    if(btn1.innerText==btn5.innerText &&
        btn1.innerText==btn9.innerText &&
        btn1.innerText !=""
        ){
            btn1.style.backgroundColor = "#90ee90"; // Light green
            btn5.style.backgroundColor = "#90ee90";
            btn9.style.backgroundColor = "#90ee90";
            // Display winner message
            winnerText.innerText = `${chance} Wins!`;
            winnerMessage.classList.add('show');
            return true; // Stop further checks
        };
    if(btn3.innerText==btn5.innerText &&
        btn3.innerText==btn7.innerText &&
        btn3.innerText !=""
        ){
            btn3.style.backgroundColor = "#90ee90"; // Light green
            btn5.style.backgroundColor = "#90ee90";
            btn7.style.backgroundColor = "#90ee90";
            // Display winner message
            winnerText.innerText = `${chance} Wins!`;
            winnerMessage.classList.add('show');
            return true; // Stop further checks
        };
    if(btn1.innerText==btn4.innerText &&
        btn1.innerText==btn7.innerText &&
        btn1.innerText !=""
        ){
            btn1.style.backgroundColor = "#90ee90"; // Light green
            btn4.style.backgroundColor = "#90ee90";
            btn7.style.backgroundColor = "#90ee90";
            // Display winner message
            winnerText.innerText = `${chance} Wins!`;
            winnerMessage.classList.add('show');
            return true; // Stop further checks
        };
    if(btn2.innerText==btn5.innerText &&
        btn2.innerText==btn8.innerText &&
        btn2.innerText !=""
        ){
            btn2.style.backgroundColor = "#90ee90"; // Light green
            btn5.style.backgroundColor = "#90ee90";
            btn8.style.backgroundColor = "#90ee90";
            // Display winner message
            winnerText.innerText = `${chance} Wins!`;
            winnerMessage.classList.add('show');
            return true; // Stop further checks
        };
    if(btn3.innerText==btn6.innerText &&
        btn3.innerText==btn9.innerText &&
        btn3.innerText !=""
        ){
            btn3.style.backgroundColor = "#90ee90"; // Light green
            btn6.style.backgroundColor = "#90ee90";
            btn9.style.backgroundColor = "#90ee90";
            // Display winner message
            winnerText.innerText = `${chance} Wins!`;
            winnerMessage.classList.add('show');
            return true; // Stop further checks
        };
        if (
            btn1.innerText !== "" &&
            btn2.innerText !== "" &&
            btn3.innerText !== "" &&
            btn4.innerText !== "" &&
            btn5.innerText !== "" &&
            btn6.innerText !== "" &&
            btn7.innerText !== "" &&
            btn8.innerText !== "" &&
            btn9.innerText !== ""
        ) {
            
            // Display draw message
            btn1.style.backgroundColor = "#207cf5"
            btn2.style.backgroundColor = "#207cf5"
            btn3.style.backgroundColor = "#207cf5"
            btn4.style.backgroundColor = "#207cf5"
            btn5.style.backgroundColor = "#207cf5"
            btn6.style.backgroundColor = "#207cf5"
            btn7.style.backgroundColor = "#207cf5"
            btn8.style.backgroundColor = "#207cf5"
            btn9.style.backgroundColor = "#207cf5"
            winnerText.innerText = "It's a Draw!";
            winnerMessage.classList.add('show');
            return true; // Stop further checks
        }
    
};


function restartGame() {
    // Clear all cell contents
    let allButtons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    
    // Clear all cell contents and reset background color
    allButtons.forEach(btn => {
        btn.innerText = "";
        btn.style.backgroundColor = ""; // Reset to default color
    });

    // Hide the winner message
    winnerMessage.classList.remove('show');

    // Reset the chance to "X"
    chance = "X";
};

let chance = "X";

chance_chance = function(){
    if ( chance == "X"){
        chance = "O";
       
    }
    else{
        chance ="X"
        
    }
};

btn1.onclick = function(){
    btn1.innerText=chance;
    setPlayerColor(btn1)
    checkwin();
    chance_chance();
    restartButton.onclick = restartGame;
};
btn2.onclick = function(){
    btn2.innerText=chance;
    setPlayerColor(btn2)
    checkwin();
    chance_chance();
    restartButton.onclick = restartGame;
};
btn3.onclick = function(){
    btn3.innerText=chance;
    setPlayerColor(btn3)
    checkwin();
    chance_chance();
    restartButton.onclick = restartGame;
};
btn4.onclick = function(){
    btn4.innerText=chance;
    setPlayerColor(btn4)
    checkwin();
    chance_chance();
    restartButton.onclick = restartGame;
};
btn5.onclick = function(){
    btn5.innerText=chance;
    setPlayerColor(btn5)
    checkwin();
    chance_chance();
    restartButton.onclick = restartGame;
};
btn6.onclick = function(){
    btn6.innerText=chance;
    setPlayerColor(btn6)
    checkwin();
    chance_chance();
    restartButton.onclick = restartGame;
};
btn7.onclick = function(){
    btn7.innerText=chance;
    setPlayerColor(btn7)
    checkwin();
    chance_chance();
    restartButton.onclick = restartGame;
};
btn8.onclick = function(){
    btn8.innerText=chance;
    setPlayerColor(btn8)
    checkwin();
    chance_chance();
    restartButton.onclick = restartGame;
};
btn9.onclick = function(){
    btn9.innerText=chance;
    setPlayerColor(btn9)
    checkwin();
    chance_chance();
    restartButton.onclick = restartGame;
};
