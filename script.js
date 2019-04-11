$(function(event){
  console.log("Dom is ready");

  var playerX = true;
  var playerY = false;
   playerXCount = [];
  var playerYCount = [];
  var td = $("td");


//Changes HTML
function player()  {
   $(td).each(function(index, td) {
    $(td).on("click", function (){
      if ($(td).html() == "") { //Button can only be clicked if unclicked (if html is empty)
      if (playerX === true) {
        $(".playerTurn").html("It is X's turn");
        $(td).addClass("X").html("X");
        playerX = false;
        playerY = true;
        playerXCount.push(index);


      } else if (playerY === true) {
        $(".playerTurn").html("It is Y's turn");
        $(td).addClass("O").html("O");
        playerY = false;
        playerX = true;
        playerYCount.push(index);
      }
    } else {
      $(td).off('click');
    }
    });
  })
}




do  {

  $(td).on("click", function (){

  player();


})
  $(playerXCount).each(function(index, todo) {
    if (playerXCount == "2") {
      console.log("Winner")
      console.log(playerXCount);
    }

})
} while (gameWon = false);


// function checkResults(count) {
//   count.forEach(function(item, index, array) {
//     console.log(count);
//   }) }







  // $(td).on("click", function (){
  //   if ($(td).html() === "X") {
  //     checkResults(playerXCount);
  //     console.log("Test");
  //
  //   }
  //   else  {
  //     checkResults(playerYCount);
  //     console.log("test2");
  //   }
  //   // checkResults(playerYCount);
  // }) }

    // if ($(td[0]).html() != "" && $(td[3]).html() && $(td[6]).html()) {
    //   $("td").html("Game Over").css("background" ,"black").css("color", "white")






//
// IF combiations
//
// then gamewon=true
//



//
// var td = $("td");
// $(td).on("click", function (){
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
  })
