// generate a number for game bt 1 10 100 
// +1 lgane ka mtlb agr hmre pas 0 ata h random number to +1 hkr wh 1 aye 

let randomNumber = Math.floor(Math.random() * 100) + 1


// variables bna kr dom ka use kr html ki ids get kr rhe hen 
const guessInput = document.getElementById ("guessInput");
const checkbtn = document.getElementById ("checkbtn");
const result = document.getElementById ("result");
const restartBtn = document.getElementById ("restartBtn");



// hm n guess k nam ka var bnaya k hmri input m di agi value is var m store ho
 // number is liye diya k agr kisi b wjah s hmra input string m ho to wh number m convert ho
 // guessinput.value mtlb jo input m value de user wh is .value k through guess m store ho

//Function  to handle user guesses
checkbtn.onclick = () => {
    const guess =Number(guessInput.value); 


    if(guess < 1 || guess > 100){
        result.textContent = 'Enter A Number Betweeen 1 To 100';
        result.style.color = 'red';

    }else if (guess === randomNumber){
        result.textContent= 'Congrats! You Win';
        result.style.color = 'green';

        checkbtn.disabled = true ;
        restartBtn.style.display = "block";

    }else{
        result.textContent = guess < randomNumber ? "Too Low Try Again !!" : "To High Try Again!!";
        result.style.color = 'orange';
    }

    //guessInput.value = ""; //agr ham chahte hmre value dne k bad input se woh value gyb ho jye empty ho jye to yhb code pass krlen
    guessInput.focus(); // input box k border pr focus krne k liye

}

restartBtn.onclick = () => {
    randomNumber = Math.floor(Math.random() * 100) +1 ;
    
    result.textContent = "";
    checkbtn.disabled = false ;
    restartBtn.style.display = "none"

}