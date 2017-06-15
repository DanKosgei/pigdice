
var die1 = Math.floor(Math.random()6 + 1);
var die2 = Math.floor(Math.random()6 + 1);
var score = die1 + die2;

if(die1 === 1) {
score = 0;
} else if (die2 === 1)
{
score = 0;
} else if (die1 === die2)
{
score = die1 + die2 + die1 + die2;
} else {
score = die1 + die2;
}

console.log("You rolled a "+die1+" and a "+die2+" for a score of "+score);

//User Interface
var resetGame = function() {
  // clear the form fields
  $('#player1name').val('');
  $('#player2name').val('');
  $('#score-to-win').val(100);


  nextField("#game-play", "#start");
  $("#game-result").hide();
  $('#player1name').focus();
}
var nextField = function(divHide, divShow) {
  $(divHide).hide();
  $(divShow).show();
}

$(document).ready(function() {
  var currentGame = new Game();
  $('#player1name').focus();

  // event handler for game submit
  $('#game-initializer').submit(function(event) {
    event.preventDefault();
    $('p.total-score').text("Total Score: ");
    // initialize game content
    currentGame.initializeGame();
  });

  // event handler for the roll button
  $('button.roll').click(function() {
    currentGame.roll();
  });

  $('button.end-turn').click(function() {
    currentGame.endTurn();
  });
  // event handler for the reset button
  $('#reset-game').click(function() {
    currentGame = new Game();
    resetGame();
  });

});
