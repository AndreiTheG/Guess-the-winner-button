function lock() {
    document.getElementById('button1').disabled = true;
    document.getElementById('button2').disabled = true;
    document.getElementById('button3').disabled = true;
}

function button() {
    for (let i = 0; i < 3; ++i) {
        document.getElementById()
    }
}

function randomWinnerButton() {
    let winnerButton = 'button' + Math.floor(Math.random() * 3 + 1);
    return winnerButton;
}

function answer() {
    let winnerButton = randomWinnerButton();
    console.log(winnerButton);
    if (winnerButton == 'button1') {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else if (winnerButton == 'button2') {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else if (winnerButton == 'button3') {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else {
        document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';   
    }
    lock();
    console.log('The code is working!');
}