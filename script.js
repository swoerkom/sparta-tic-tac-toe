$(function(event){
  console.log("Dom is ready");

  var playerX = true;
  var playerY = false;
  var playerXCount = [];
  var playerYCount = [];

  var td = $("td");


//Changes HTML
function playerTurn() {
  $(td).each(function(index, td) {
    $(td).on("click", function (){
      if ($(td).html() == "") { //Button can only be clicked if unclicked (if html is empty)
      if (playerX === true) {
        $(".playerTurn").html("It is X's turn");
        $(td).addClass("X").html("X");
        playerX = false;
        playerY = true;
        playerXCount += " " +index;

      } else if (playerY === true) {
        $(".playerTurn").html("It is Y's turn");
        $(td).addClass("O").html("O");
        playerY = false;
        playerX = true;
        playerYCount += " " +index;
      }
    }
  })
  })
}
})


do {
  var gameWon = false;
  playerTurn()

} while gameWon = false;





//
var td = $("td");
$(td).on("click", function (){
//   console.log($(td[0]).html());



//array
  // if ($(td).html() !== "") {
  //   if ($(td).html() == "X") {
  //     playerXCount; //add the td number to array
  //   } else if ($(td).html() == "Y") {
  //     playerYCount += //add td number to array
  //   }
  // }

//MULTIFUCTIONAL ARRAY:
// If one player has they will win:
// 0 3 6
// 0 1 2
// 6 7 8
// 0 4 8
// 2 4 6
// 3 4 5
// Otherwise they loose
// If no player wins they loose



// if ($(td[0]).html() != "" && $(td[3]).html() && $(td[6]).html()) {
//
// if ($(td[0]).html() != "" && $(td[1]).html() && $(td[2).html()) {
//
// if ($(td[6]).html() != "" && $(td[7]).html() && $(td[8]).html()) {
//
// if ($(td[0]).html() != "" && $(td[4]).html() && $(td[8]).html()) {
//
// if ($(td[2]).html() != "" && $(td[4]).html() && $(td[6]).html()) {
//
// if ($(td[3]).html() != "" && $(td[4]).html() && $(td[5]).html()) {


//Create a string each time player clicks button. Add the button number to a string.
//Loop through both Player Y and X strings each time player clicks button - compare against the IF statements.


//add each number to player X and player Y. Player wins if one of the IF statements is true

//Display when player wins game
  //$("td").html("Game Over").css("background" ,"black").css("color", "white")

// }
 });

// do {
  // playerTurn();
  //
  // if $(td[0]).html() == "X") {
  //   console.log("test")
  // }

//
//   ($(td[0]) && $(td[3]) && $(td[6])
//   $(td).addClass("X").html("X");
//
//
//   $(td).addClass("X").html("X");
//
//
//
//
// } while (gameWon = 0);














 //  $(td).each(function(index, td) {
 //    $(td).on("click", function (){
 //      $(td).addClass("X").html("X");
 //      console.log(index);
 //    })
 // });
