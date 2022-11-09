function lock() {
    document.getElementById('button1').disabled = true;
    document.getElementById('button2').disabled = true;
    document.getElementById('button3').disabled = true;
}
function randomWinnerButton() {
    let winnerButton = Math.floor(Math.random() * 3 + 1);
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