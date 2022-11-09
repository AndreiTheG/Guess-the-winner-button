function lock() {
    document.getElementById('button1').disabled = true;
    document.getElementById('button2').disabled = true;
    document.getElementById('button3').disabled = true;
}

function randomWinnerButton() {
    let winnerButton = 'button' + Math.floor(Math.random() * 3 + 1);
    return winnerButton;
}

function answer() {
    let firstButton = 1, secButton = 2, thirdButton = 3, winnerButton = randomWinnerButton();
    console.log(winnerButton);
    /*if (winnerButton == firstButton && winnerButton != secButton && winnerButton != thirdButton) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else if (winnerButton != firstButton && winnerButton == secButton && winnerButton != thirdButton) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else if (winnerButton != firstButton && winnerButton != secButton && winnerButton == thirdButton) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else {
        document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';   
    }*/
    lock();
    console.log('The code is working!');
}