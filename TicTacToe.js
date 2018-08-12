let canvas = document.getElementById('ttt');
    ctx = canvas.getContext('2d');
    msg = document.getElementById('message');
    cellSize = 100;
//after testing make your numbers all zeros
    map = [
        0,0,0,
        0,0,0,
        0,0,0,

  /*      1,0,0,
        0,0,-1,
        -1,0,1, */
    ];
    winPatterns = [
        0b111000000, 0b000111000, 0b000000111, //rows
        0b100100100, 0b010010010, 0b001001001, //columns
        0b100010001, 0b001010100, //diagonals
    ],
       BLANK = 0, X = 1, o= -1;
// mouse moves start
    mouse = {
        x: -1,
        y: -1,
    };
    currentPlayer = X;

// up above is kind of like "var-land", but instead the person that is coaching is all about let.
    canvas.width = canvas.height = 3 * cellSize;

    canvas.addEventListener('mouseout', function (){
        mouse.x = mouse.y = -1;
    });

    canvas.addEventListener('mousemove', function (e){
        let x = e.pageX - canvas.offsetLeft,
            y = e.pageY - canvas.offsetTop;

        mouse.x = x;
        mouse.y = y;

        getCellByCoords(x, y);
    });
// this is suppost to let me click and have an X or O show.
    canvas.addEventListener('click', function (e){
        play(getCellByCoords(mouse.x, mouse.y));
});
// mouse moves end

function displayTurn () {
    msg.textContent = ((currentPlayer == X)? 'X': 'O') + '\'s turn';
}

// lets play
function play (cell) {
 // if (gameOver) return;

    if (map[cell] != BLANK){
        msg.textContent = 'Position is Taken';
        return;
    }
    map[cell] = currentPlayer;
    checkWin(currentPlayer);
    currentPlayer *= -1;

   let winCheck = checkWin(currentPlayer);
        if (winCheck != 0){
            gameOver = true;
            msg.textContext = ((currentPlayer == X)? 'X' : 'O') + ' wins' ;
        } else if (map.indexOf(0) == -1){
            gameOver = true;
            msg.textContent = 'tie';
         }

    displayTurn();
 //   gameOver = false;
}
// check player wins
function checkWin (player){
    let playerMapBitMask = 0;
    for (let i = 0; i< map.length; i++){
        playerMapBitMask <<= 1;
        if (map[i] == player)
            playerMapBitMask += 1;
    }
    for (let i = 0; i < winPatterns.length; i++){
        if ((playerMapBitMask & winPatterns[i]) == winPatterns[i]){
            return winPatterns[i];
        }
    }
    return 0;
}
// drawing the board
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    fillBoard();

    function drawBoard() {
        ctx.strokStyle = 'black'
        ctx.linewdith = 15;

        ctx.beginPath();
        ctx.moveTo(cellSize, 0);
        ctx.lineTo(cellSize, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cellSize * 2, 0);
        ctx.lineTo(cellSize * 2, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, cellSize);
        ctx.lineTo(canvas.width, cellSize);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, cellSize * 2);
        ctx.lineTo(canvas.width, cellSize * 2);
        ctx.stroke();
    }

        function drawX() {
            ctx.beginPath();
            ctx.moveTo(-cellSize / 3, -cellSize / 3);
            ctx.lineTo(cellSize / 3, cellSize / 3);
            ctx.moveTo(cellSize / 3, -cellSize / 3);
            ctx.lineTo(-cellSize / 3, cellSize / 3);
            ctx.stroke();
        }

        function drawO () {
            ctx.beginPath();
            ctx.arc(0, 0, cellSize / 3, 0, Math.PI * 2);
            ctx.stroke();
        }

    function fillBoard() {
// for some reason this logic makes my tictactoe board hide.
        for (let i = 0; i < map.length; i++){
            let coords = getCellCoords(i);

            ctx.save();
            ctx.translate(coords.x + cellSize / 2, coords.y + cellSize / 2);
            if (map[i] == X) {
                drawX();
            }
                else if (map[i] == 0) {
                drawO();
            }
            ctx.restore();
        }
  // logic end
    }
     requestAnimationFrame(draw);
}

    function getCellCoords(cell) {
        let x = (cell % 3) * cellSize,
            y = Math.floor(cell / 3) * cellSize;
        return {
            'x': x,
            'y': y,
        };
    }
    function getCellByCoords (x, y) {
         return (Math.floor(x / cellSize) % 3) + Math.floor(y / cellSize) * 3;
         }
 draw();

