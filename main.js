// rock paper scissors game
        //get computer answer
        //initialise computer answer variable
        // random number between 1-3
        // if 1, rock, if 2, paper, else- scissers
//let computerSelection= "";
function computerPlay(){
        let rand = Math.floor(Math.random()*3);
        return (rand==1) ? "rock" : (rand==2) ? "paper" : "scissors";
}
                
    
//get human answer
    //use prompt to get human answer
    //convert to lowercase
    //check for correct value
//let playerSelection= "";
function getPlayerSelection(){
    let playerSelection = prompt("what is your selection?").toLowerCase();
    if(playerSelection == "rock" || playerSelection == "paper" || playerSelection== "scissors"){
        // console.log(computerSelection);
        return playerSelection;
    } else {
        alert("please enter a correct value")
        // playerSelection = prompt("what is your selection?").toLowerCase();
        getPlayerSelection()
    }
}
    
//check winner - compare two answers
//check if playerSelection wins, otherwise, player lost
    // winning conditions
        //rock vs scissors
        //paper vs rock
        //scissors vs paper
        //return win/ return loss
    

function checkRoundWinner(computerSelection, playerSelection){
    if(computerSelection!="" && playerSelection !=""){
        console.log("you selected " + playerSelection + "the computer selected " + computerSelection)
        if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
            console.log("congratulations, you've won this round!")
            return "player";
        }else if(playerSelection==computerSelection){
            console.log("it's a tie");
            return "none"
        }
        
        else{
            console.log("sorry you've lost this round")
            return "computer";
        }
    }else{
        console.log("game not working")
    }
}

//initialise score variable for each player 
//play game 5 times
//if player wins, add to score
//if computer wins add to score

function game(){
    let playerScore=0;
    let computerScore=0;
    for (let i=0; i<5; i++){
        let playerSelection = getPlayerSelection();
        let computerSelection = computerPlay();
        let roundWin =checkRoundWinner(computerSelection, playerSelection);
        roundWin=="player" ? playerScore+=1 :roundWin=="computer"? computerScore+=1: playerScore;
        console.log ("player score: " + playerScore);
        console.log ("computerscore: " + computerScore);   
    }
    if (playerScore>computerScore){
        console.log ("congratulations, you've won!")
    }else if(computerScore>playerScore){
        console.log("sorry you've lost the game :(")
    }else if(playerScore==computerScore){
        console.log("it's a tie!")
    }else{
        console.log("somethings gone wrong, please refresh the page")
    }
}
game();

//compare scores
//print winner

          
            