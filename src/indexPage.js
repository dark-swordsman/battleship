/*****************************************

TODO Facts:
- the same number board is for the same player
for example: board1 is player 1's ship board, and board1s is player 1's attack board
player 1 attacks player 2, so his board1s corresponds to the attacks on board2, and vice versa

TODO Ideas:
- board(1,2,1s,2s)[row][column]

TODO event log:
- fill board with ships
- start game

*****************************************/

var board1, board2, board1s, board2s;

board1 = board2 = board1s = board2s = new Array(10);
function fillBoard(board){
  for(var i = 0; i < 10; i++){
    board[i] = new Array(10);

    for(var j = 0; j < 10; j++){
      board[i][j] = false;
    }
  }
}

var boards = [board1, board2, board1s, board2s];

for(var i = 0; i < 4; i++){
  fillBoard(boards[i]);
}

var players = {
  "human":{
    "ships":{
      "carrier":{
        "length": 5,
        "isPlaced": false,
        "name":"carrier"
      },
      "battleship":{
        "length": 4,
        "isPlaced": false,
        "name":"battleship"
      },
      "submarine":{
        "length": 3,
        "isPlaced": false,
        "name":"submarine"
      },
      "cruiser":{
        "length": 3,
        "isPlaced": false,
        "name":"cruiser"
      },
      "destroyer":{
        "length": 2,
        "isPlaced": false,
        "name":"destroyer"
      }
    }
  },
  "cpu":{
    "ships":{
      "carrier":{
        "length": 5,
        "isPlaced": false,
        "name":"carrier"
      },
      "battleship":{
        "length": 4,
        "isPlaced": false,
        "name":"battleship"
      },
      "submarine":{
        "length": 3,
        "isPlaced": false,
        "name":"submarine"
      },
      "cruiser":{
        "length": 3,
        "isPlaced": false,
        "name":"cruiser"
      },
      "destroyer":{
        "length": 2,
        "isPlaced": false,
        "name":"destroyer"
      }
    }
  }
}

function placeShip(ship, player){
  //false means horizontal, true means vertical
  var rotation;
  var location;
  var board;

  function detectClick(x, y){
    rotation = window.confirm("Ship: " + ship.name + ". Vertical (OK) or Horizontal (Cancel)?");
    board = board1;

    console.log(x + " AND " + y);

    var isTaken = false;
    // check if the spot is already there
    for(var i = y; i < (ship.length + y); i++){
      if(board[i][x] === true){
        isTaken = true;
      }
    }

    if(isTaken === true){
      window.alert("This spot is already taken. Please Try Again");
      placeShip(ship, player);
    }else if(isTaken === false){
      if(rotation === true){
        for(var i = y; i < (ship.length + y); i++){
          board[i][x] = true;
        }
      }else if(rotation === false){
        for(var i = x; i < (ship.length + x); i++){
          board[y][i] = true;
        }
      }
    }

    ship.isPlaced = true;
  }

  if(player === 'h'){
    // LOGIC TO MAKE HTML GRID clickable
    var css = '#board1 td:hover{ background-color: grey }';
    var style = document.createElement('style');
    style.innerHTML = css;
    document.getElementById('body').appendChild(style);

    for(var i = 0; i < htmlX.length; i++){
      for(var j = 0; j < 10; j++){
        htmlX[i].children[j].onclick = function(){
          detectClick(i, j);
        }
      }
    }

    // LOGIC TO FIND CLICK
  }else if(player === 'c'){


    // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
    // cpu logic
    // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO


    board = board2;
  }


}

function placeAllShips(player){
  var playerIs;

  if(player === players.human.ships){
    playerIs = 'h';
  }else{
    playerIs = 'c';
  }

  placeShip(player.carrier, playerIs);
  placeShip(player.battleship, playerIs);
  placeShip(player.submarine, playerIs);
  placeShip(player.cruiser, playerIs);
  placeShip(player.destroyer, playerIs);

}
// Make the boards clickable!!!!!!!!!!!!!!!!!!!
var htmlX = new Array(10);

for(var i = 0; i < htmlX.length; i++){
  htmlX[i] = document.getElementById('board1').childNodes[1].children[i];
}
// TODO x locations are defined, but y locations are dervied from htmlX.
// for example, htmlX[0].chilren[0] is the first column in the first box, AKA (1,1);






// place the ships!!!
var hS = players.human.ships;
var cS = players.cpu.ships;

var placeShipsButton = document.getElementById('placeShips');

placeShipsButton.onclick = function(){
  placeAllShips(hS);
}
