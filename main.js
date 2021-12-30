// To play the click game
var button = document.querySelector('.button');
var click = 0; // number of clicks
var highScore = 0; // highscore at a particular time
var timeout = 11;

//timer
function count() {
  document.querySelector('.start').addEventListener('click', () => {
    document.querySelector('.start').innerHTML = "Restart?";

    // Storing highscore
    if (timeout === 0) { 
      document.querySelector('.timer').innerHTML = "Do better boi!";
      if (click > highScore)
        highScore = click - 1;
    }

    // Setting timer operations
    document.querySelector('.score').innerHTML = highScore;
    timeout = 11;
    click = 0;
    document.querySelector('.clicks').innerHTML = click;

    //start timer
    document.querySelector('.timer').innerHTML = "Your time starts now";
    var timer = setInterval(() => {
      document.querySelector('.start').addEventListener('click', () => {
        clearInterval(timer);
      });
      timeout--;
      
      // resetting timer
      document.querySelector('.timer').innerHTML = "Time left: " + timeout;
      if (timeout === 0) {
        clearInterval(timer);
        document.querySelector('.timer').innerHTML = "Time up!";
        document.querySelector('.start').innerHTML = "Retry";
      }
    }, 1000);
  });
}

// Calling count function
count();

// If extra 
document.querySelector('.button').addEventListener('click', () => {
  if (timeout > 0 && timeout != 11)
    document.querySelector('.clicks').innerHTML = click++;
  //if (timeout === 0)
});
