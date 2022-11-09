function lock() {
    document.getElementById('button1').disabled = true;
    document.getElementById('button2').disabled = true;
    document.getElementById('button3').disabled = true;
}

function button() {
    for (let i = 0; i < 3; ++i) {
        document.getElementById('buttons').innerHTML = '<button id="button"' + i + 1 + '"" onclick="answer(' + i + 1 + ')">Button ' + i + 1 +'</button>'
    }
}

function randomWinnerButton() {
    let winnerButton = 'button' + Math.floor(Math.random() * 3 + 1);
    return winnerButton;
}

function answer(numButton) {
    let winnerButton = randomWinnerButton();
    console.log(winnerButton);
    if (numButton == winnerButton) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else {
        document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';   
    }
    lock();
    console.log('The code is working!');
}