let userScore = 0;
let compScore = 0;

function computerPlay() {
    let x = Math.random();
    if (x <= 0.333) return "Rock"
    if (x > 0.333 && x <= 0.666) return "Paper"
    if (x > 0.666) return "Scissors"
}


function btncl(e) {
    console.log(e.target.dataset.key);
    
}


const btn = document.querySelectorAll('button');
// let buttons = Array.from(btn);

console.log(btn);

// btn.forEach(x => x.addEventListener('click', btncl));

btn.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
        // console.log(e.target.dataset.key);
        let res = playRound(e.target.dataset.key, computerPlay());
        score(res);
    //   alert("123");
    });
  });


// let B = document.querySelector("button");
// B.addEventListener('click',test);





function playRound(playerSelection,computerSelection) {
    let res = document.querySelector('.message');
    if(playerSelection == "Rock") {
        if(computerSelection == "Paper" ) 
        {res.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return 'lose';}
        
        if(computerSelection == "Scissors" ){

         res.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
         return 'win';}

        if(computerSelection === playerSelection ) {
            res.textContent = `It's a draw!`;
            return 'draw';
        }
    }
    else if(playerSelection == "Paper") {
        if(computerSelection == "Scissors" ) {
            res.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            return 'lose';}

        if(computerSelection == "Rock" ) {
            res.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            return 'win';}

        if(computerSelection === playerSelection ) {
            res.textContent = `It's a draw!`;
            return 'draw';}
    }
    else if(playerSelection == "Scissors") {
        if(computerSelection == "Rock" ) {
            res.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            return 'lose';}

        if(computerSelection == "Paper" ) {
            res.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            return 'lose';}
            
        if(computerSelection === playerSelection ) {
            res.textContent = `It's a draw!`;
            return 'draw';}
        }
    
}

function score(res){
    // add errors of empty string and meaningless words
    
    if(res == "win")
    {
        userScore++;
        let tab = document.querySelector('.pscore');
        tab.innerHTML = userScore;
        // tab.textContent = `${userScore}`;
    }
    
   else if(res == "lose")
    {
        compScore++;
        let tab = document.querySelector('.cscore');
        tab.innerHTML = compScore;
    }

    else if(res == "draw")
    {
        userScore++;
        compScore++;
        let tab1 = document.querySelector('.cscore');
        let tab2 = document.querySelector('.pscore');
        tab1.innerHTML = compScore;
        tab2.innerHTML = userScore;
    }
          
    
      console.log(res);
      console.log(`Your score is ${userScore}`);
      console.log(`Computer score is ${compScore}`);
    

    // if(userScore > compScore) return "You're totally Winner!";
    // if(userScore < compScore) return "You're totally Loser!";
    // if(userScore === compScore) return "Sad but true, it's a draw";
}

// console.log(game());