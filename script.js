let input = document.querySelector(".input");
let check = document.querySelector(".check");
let helpMsg = document.querySelector(".msg3");
let chancesLeftMsg = document.querySelector(".msg2");
let newGame = document.querySelector(".new");
let winningNumber = Math.floor(Math.random()*100) ;


check.onclick=()=>{
    checkNumber();
    
    console.log(chances);
    chances--;
    chancesLeftMsg.innerHTML = `You have ${chances} chances left`;
    
    
}


function checkNumber(){
   
        if(input.value == winningNumber){
            console.log("winner");
            helpMsg.innerHTML="Congratulations! You Choose the right number";
            
            chancesLeftMsg.innerHTML==="Game Finished";
        }
        else if(input.value !== winningNumber){
            console.log("not a right number");
    }
    
 
    if(input.value > winningNumber){
        console.log("your number is high!");
        helpMsg.innerHTML = "your number is high !";
    }
    if(input.value < winningNumber){
        console.log("your number is low !");
        helpMsg.innerHTML = "your number is low!";
    }
    if(input.value>100 || input.value<0){
        helpMsg.innerHTML = "Your number is invalid";
        helpMsg.style.color = "yellow";
    }
    
}


newGame.onclick=()=>{
    location.reload();
}