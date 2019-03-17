'use strict'
var gCurrentNum = 1;
var gSumRows = 4;
var gEli = 26;
var timeStart = Date.now();

//play the game
function init() {
    renderQuest();
}

//creat table with random nums
function renderQuest() {
    var randomNums = randomNum();
    var strHTML = '';
    for (var i = 1; i <= gSumRows; i++) {
        strHTML += '<tr>';
        for (var j = 1; j <= gSumRows; j++) {
            var num = randomNums.pop();
            strHTML +=
                `<td class="cell${num} cell" onclick="cellClicked(${num} , this)">
                    ${num}
                </td>`;
        }
        strHTML += '</tr>';
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}

//creat random nums
function randomNum() {
    var mat = [];
    var counter = 1;
    for (let i = 0; i < gSumRows ** 2; i++) {
        mat.push(counter);
        counter++;
    }
    var gNums = [];
    for (let i = 0; i < gSumRows ** 2; i++) {
        var tmp = parseInt((Math.random() * mat.length));
        gNums[i] = (mat.splice(tmp, 1));
    }
    return gNums;
}

//check if the number correct
function cellClicked(num, el) {
    if (gCurrentNum === num) {
        changeColor(el);
        if (gCurrentNum === gSumRows ** 2 ) {
        console.log('win!!!');
        win();
    }
        gCurrentNum++;
    }
    
    console.log(num);
    
}
function clickEasy() {
    gSumRows = 4;
    gCurrentNum = 1;
    init();
}
function clickHard() {
    gSumRows = 5;
    gCurrentNum = 1;
    init();
}
function clickVeryHard() {
    gSumRows = 6;
    gCurrentNum = 1;
    init();
}
function changeColor(el) {
    el.classList.add('cellNew');

}
function win() {
    var millis = Date.now() - timeStart;
    document.getElementById('time').innerHTML = millis / 1000 + ' second';
    timeStart = Date.now();
    gCurrentNum = 1;
    init();
}