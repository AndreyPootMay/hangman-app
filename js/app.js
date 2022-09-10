var mainMenu = document.getElementById('main-menu');
var gameBox = document.getElementById('game-box');
var btnStartGame = document.querySelector('.btn-start-game');
var entry = document.querySelector('body');
var divHiddenWord = document.getElementById('hidden-word');
var btnNewGame = document.getElementById('btn-new-game');
var btnDesist = document.getElementById('btn-cancel');
var alertWin = document.querySelector('.alert-win');
var alertFail = document.querySelector('.alert-fail');
var alertSecretWord = document.getElementById('alert-secret-word');
var alertPoints = document.getElementById('alert-points');
var score = document.querySelector('.accumulated-points');
var keyQ = document.querySelector('.btn-Q');
var keyW = document.querySelector('.btn-W');
var keyE = document.querySelector('.btn-E');
var keyR = document.querySelector('.btn-R');
var keyT = document.querySelector('.btn-T');
var keyY = document.querySelector('.btn-Y');
var keyU = document.querySelector('.btn-U');
var keyI = document.querySelector('.btn-I');
var keyO = document.querySelector('.btn-O');
var keyP = document.querySelector('.btn-P');
var keyA = document.querySelector('.btn-A');
var keyS = document.querySelector('.btn-S');
var keyD = document.querySelector('.btn-D');
var keyF = document.querySelector('.btn-F');
var keyG = document.querySelector('.btn-G');
var keyH = document.querySelector('.btn-H');
var keyJ = document.querySelector('.btn-J');
var keyK = document.querySelector('.btn-K');
var keyL = document.querySelector('.btn-L');
var keyÑ = document.querySelector('.btn-Ñ');
var keyZ = document.querySelector('.btn-Z');
var keyX = document.querySelector('.btn-X');
var keyC = document.querySelector('.btn-C');
var keyV = document.querySelector('.btn-V');
var keyB = document.querySelector('.btn-B');
var keyN = document.querySelector('.btn-N');
var keyM = document.querySelector('.btn-M');
var selectedWord;
var arrayWord = [];
var keyPressed;
var lettersUsed = [];
var fail = 0;
var win = 0;
var points = 0;
var complete = false;
gameBox.style.display = 'none';
alertWin.style.display = 'none';
alertFail.style.display = 'none';
btnStartGame.addEventListener('click', newGame);
entry.addEventListener('keypress', captureKey);
btnNewGame.addEventListener('click', newGame);
btnDesist.addEventListener('click', desist);
function newGame() {
    gameBox.style.display = 'block';
    mainMenu.style.display = 'none';
    lettersUsed = [];
    fail = 0;
    win = 0;
    if (complete == false) {
        points = 0;
    }
    complete = false;
    removeWordDiv();
    hangedCharacter(0);
    alertWin.style.display = 'none';
    alertFail.style.display = 'none';
    keyboardUnlock();
    createWord();
    score.innerHTML = "".concat(points);
}
// Esta funcion permite rendirse y volver al menu principal
function desist() {
    newGame();
    gameBox.style.display = 'none';
    mainMenu.style.display = 'block';
}
// Esta funcion elimina los elementos div creados a travez de js
function removeWordDiv() {
    arrayWord = [];
    for (var i = 0; i < selectedWord.length; i++) {
        var removeDivHidden = document.getElementById("".concat(i));
        divHiddenWord.removeChild(removeDivHidden);
    }
}
// Esta funcion genera una palabra aleatoria y asigna un espacio vacio para cada letra
function createWord() {
    var randomNumber = Math.floor(Math.random() * words.length);
    selectedWord = words[randomNumber].toUpperCase();
    arrayWord = selectedWord.split('');
    for (var i = 0; i < arrayWord.length; i++) {
        var div = document.createElement('div');
        div.setAttribute('id', "".concat(i));
        div.setAttribute('class', 'hidde');
        div.textContent = '.';
        divHiddenWord.appendChild(div);
    }
}
// Esta funcion captura la tecla presionada a travez de un teclado fisico
// y evita que la misma tecla sea presionada 2 veces.
// Tambien sirve para bloquear las teclas cuando el juego finaliza.
function captureKey(event) {
    var validation = 'QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm';
    keyPressed = event.key.toUpperCase();
    disableKey();
    if (validation.includes(event.key) && !lettersUsed.toString().includes(keyPressed) && fail < 7 && win < selectedWord.length) {
        lettersUsed.push("".concat(keyPressed));
        checkWord();
    }
}
// Esta funcion verifica si la tecla presionada existe en la palabra oculta
function checkWord() {
    if (arrayWord.includes(keyPressed)) {
        for (var i = 0; i < arrayWord.length; i++) {
            if (arrayWord[i] == keyPressed) {
                var found = i;
                win++;
                document.getElementById("".concat(found)).innerHTML = keyPressed;
                document.getElementById("".concat(found)).removeAttribute('class');
                document.querySelector('.btn-' + keyPressed).style.backgroundColor = "green";
                document.querySelector('.btn-' + keyPressed).style.color = "white";
                endGameMsg();
            }
        }
    }
    else {
        if (fail < 7) {
            fail++;
            hangedCharacter(fail);
            document.querySelector('.btn-' + keyPressed).style.backgroundColor = "red";
            document.querySelector('.btn-' + keyPressed).style.color = "white";
            endGameMsg();
        }
    }
}
// Esta funcion muestra mensaje si gano o perdio
function endGameMsg() {
    if (fail == 7) {
        complete = false;
        points = 0;
        alertSecretWord.innerHTML = selectedWord;
        alertFail.style.display = 'block';
        keyboardLock();
    }
    if (win == selectedWord.length) {
        complete = true;
        points = points + selectedWord.length;
        alertPoints.innerHTML = "".concat(selectedWord.length);
        alertWin.style.display = 'block';
        keyboardLock();
    }
}
function hangedCharacter(condition) {
    var getImage = document.querySelector('#hanged-character img');
    getImage.setAttribute('src', 'img/assets/hanget_' + condition + '.svg');
}
hangedCharacter(0);
createWord();
keyQ.addEventListener('click', pressQ);
keyW.addEventListener('click', pressW);
keyE.addEventListener('click', pressE);
keyR.addEventListener('click', pressR);
keyT.addEventListener('click', pressT);
keyY.addEventListener('click', pressY);
keyU.addEventListener('click', pressU);
keyI.addEventListener('click', pressI);
keyO.addEventListener('click', pressO);
keyP.addEventListener('click', pressP);
keyA.addEventListener('click', pressA);
keyS.addEventListener('click', pressS);
keyD.addEventListener('click', pressD);
keyF.addEventListener('click', pressF);
keyG.addEventListener('click', pressG);
keyH.addEventListener('click', pressH);
keyJ.addEventListener('click', pressJ);
keyK.addEventListener('click', pressK);
keyL.addEventListener('click', pressL);
keyÑ.addEventListener('click', pressÑ);
keyZ.addEventListener('click', pressZ);
keyX.addEventListener('click', pressX);
keyC.addEventListener('click', pressC);
keyV.addEventListener('click', pressV);
keyB.addEventListener('click', pressB);
keyN.addEventListener('click', pressN);
keyM.addEventListener('click', pressM);
function pressQ() { keyPressed = 'Q'; lettersUsed.push(keyPressed); checkWord(); keyQ.disabled = true; }
function pressW() { keyPressed = 'W'; lettersUsed.push(keyPressed); checkWord(); keyW.disabled = true; }
function pressE() { keyPressed = 'E'; lettersUsed.push(keyPressed); checkWord(); keyE.disabled = true; }
function pressR() { keyPressed = 'R'; lettersUsed.push(keyPressed); checkWord(); keyR.disabled = true; }
function pressT() { keyPressed = 'T'; lettersUsed.push(keyPressed); checkWord(); keyT.disabled = true; }
function pressY() { keyPressed = 'Y'; lettersUsed.push(keyPressed); checkWord(); keyY.disabled = true; }
function pressU() { keyPressed = 'U'; lettersUsed.push(keyPressed); checkWord(); keyU.disabled = true; }
function pressI() { keyPressed = 'I'; lettersUsed.push(keyPressed); checkWord(); keyI.disabled = true; }
function pressO() { keyPressed = 'O'; lettersUsed.push(keyPressed); checkWord(); keyO.disabled = true; }
function pressP() { keyPressed = 'P'; lettersUsed.push(keyPressed); checkWord(); keyP.disabled = true; }
function pressA() { keyPressed = 'A'; lettersUsed.push(keyPressed); checkWord(); keyA.disabled = true; }
function pressS() { keyPressed = 'S'; lettersUsed.push(keyPressed); checkWord(); keyS.disabled = true; }
function pressD() { keyPressed = 'D'; lettersUsed.push(keyPressed); checkWord(); keyD.disabled = true; }
function pressF() { keyPressed = 'F'; lettersUsed.push(keyPressed); checkWord(); keyF.disabled = true; }
function pressG() { keyPressed = 'G'; lettersUsed.push(keyPressed); checkWord(); keyG.disabled = true; }
function pressH() { keyPressed = 'H'; lettersUsed.push(keyPressed); checkWord(); keyH.disabled = true; }
function pressJ() { keyPressed = 'J'; lettersUsed.push(keyPressed); checkWord(); keyJ.disabled = true; }
function pressK() { keyPressed = 'K'; lettersUsed.push(keyPressed); checkWord(); keyK.disabled = true; }
function pressL() { keyPressed = 'L'; lettersUsed.push(keyPressed); checkWord(); keyL.disabled = true; }
function pressÑ() { keyPressed = 'Ñ'; lettersUsed.push(keyPressed); checkWord(); keyÑ.disabled = true; }
function pressZ() { keyPressed = 'Z'; lettersUsed.push(keyPressed); checkWord(); keyZ.disabled = true; }
function pressX() { keyPressed = 'X'; lettersUsed.push(keyPressed); checkWord(); keyX.disabled = true; }
function pressC() { keyPressed = 'C'; lettersUsed.push(keyPressed); checkWord(); keyC.disabled = true; }
function pressV() { keyPressed = 'V'; lettersUsed.push(keyPressed); checkWord(); keyV.disabled = true; }
function pressB() { keyPressed = 'B'; lettersUsed.push(keyPressed); checkWord(); keyB.disabled = true; }
function pressN() { keyPressed = 'N'; lettersUsed.push(keyPressed); checkWord(); keyN.disabled = true; }
function pressM() { keyPressed = 'M'; lettersUsed.push(keyPressed); checkWord(); keyM.disabled = true; }
// Desactiva tecla de teclado virtual luego de ser presionada, mediante teclado fisico
function disableKey() {
    if (keyPressed == 'Q') {
        keyQ.disabled = true;
    }
    if (keyPressed == 'W') {
        keyW.disabled = true;
    }
    if (keyPressed == 'E') {
        keyE.disabled = true;
    }
    if (keyPressed == 'R') {
        keyR.disabled = true;
    }
    if (keyPressed == 'T') {
        keyT.disabled = true;
    }
    if (keyPressed == 'Y') {
        keyY.disabled = true;
    }
    if (keyPressed == 'U') {
        keyU.disabled = true;
    }
    if (keyPressed == 'I') {
        keyI.disabled = true;
    }
    if (keyPressed == 'O') {
        keyO.disabled = true;
    }
    if (keyPressed == 'P') {
        keyP.disabled = true;
    }
    if (keyPressed == 'A') {
        keyA.disabled = true;
    }
    if (keyPressed == 'S') {
        keyS.disabled = true;
    }
    if (keyPressed == 'D') {
        keyD.disabled = true;
    }
    if (keyPressed == 'F') {
        keyF.disabled = true;
    }
    if (keyPressed == 'G') {
        keyG.disabled = true;
    }
    if (keyPressed == 'H') {
        keyH.disabled = true;
    }
    if (keyPressed == 'J') {
        keyJ.disabled = true;
    }
    if (keyPressed == 'K') {
        keyK.disabled = true;
    }
    if (keyPressed == 'L') {
        keyL.disabled = true;
    }
    if (keyPressed == 'Ñ') {
        keyÑ.disabled = true;
    }
    if (keyPressed == 'Z') {
        keyZ.disabled = true;
    }
    if (keyPressed == 'X') {
        keyX.disabled = true;
    }
    if (keyPressed == 'C') {
        keyC.disabled = true;
    }
    if (keyPressed == 'V') {
        keyV.disabled = true;
    }
    if (keyPressed == 'B') {
        keyB.disabled = true;
    }
    if (keyPressed == 'N') {
        keyN.disabled = true;
    }
    if (keyPressed == 'M') {
        keyM.disabled = true;
    }
}
// Esta funcion bloquea el teclado virtual cuando el juego termina
function keyboardLock() {
    keyQ.disabled = true;
    keyW.disabled = true;
    keyE.disabled = true;
    keyR.disabled = true;
    keyT.disabled = true;
    keyY.disabled = true;
    keyU.disabled = true;
    keyI.disabled = true;
    keyO.disabled = true;
    keyP.disabled = true;
    keyA.disabled = true;
    keyS.disabled = true;
    keyD.disabled = true;
    keyF.disabled = true;
    keyG.disabled = true;
    keyH.disabled = true;
    keyJ.disabled = true;
    keyK.disabled = true;
    keyL.disabled = true;
    keyÑ.disabled = true;
    keyZ.disabled = true;
    keyX.disabled = true;
    keyC.disabled = true;
    keyV.disabled = true;
    keyB.disabled = true;
    keyN.disabled = true;
    keyM.disabled = true;
}
// Esta funcion desbloquea el teclado virtual cuando se inicia un nuevo juego
function keyboardUnlock() {
    keyQ.disabled = false;
    keyW.disabled = false;
    keyE.disabled = false;
    keyR.disabled = false;
    keyT.disabled = false;
    keyY.disabled = false;
    keyU.disabled = false;
    keyI.disabled = false;
    keyO.disabled = false;
    keyP.disabled = false;
    keyA.disabled = false;
    keyS.disabled = false;
    keyD.disabled = false;
    keyF.disabled = false;
    keyG.disabled = false;
    keyH.disabled = false;
    keyJ.disabled = false;
    keyK.disabled = false;
    keyL.disabled = false;
    keyÑ.disabled = false;
    keyZ.disabled = false;
    keyX.disabled = false;
    keyC.disabled = false;
    keyV.disabled = false;
    keyB.disabled = false;
    keyN.disabled = false;
    keyM.disabled = false;
    keyQ.removeAttribute('style');
    keyW.removeAttribute('style');
    keyE.removeAttribute('style');
    keyR.removeAttribute('style');
    keyT.removeAttribute('style');
    keyY.removeAttribute('style');
    keyU.removeAttribute('style');
    keyI.removeAttribute('style');
    keyO.removeAttribute('style');
    keyP.removeAttribute('style');
    keyA.removeAttribute('style');
    keyS.removeAttribute('style');
    keyD.removeAttribute('style');
    keyF.removeAttribute('style');
    keyG.removeAttribute('style');
    keyH.removeAttribute('style');
    keyJ.removeAttribute('style');
    keyK.removeAttribute('style');
    keyL.removeAttribute('style');
    keyÑ.removeAttribute('style');
    keyZ.removeAttribute('style');
    keyX.removeAttribute('style');
    keyC.removeAttribute('style');
    keyV.removeAttribute('style');
    keyB.removeAttribute('style');
    keyN.removeAttribute('style');
    keyM.removeAttribute('style');
}
