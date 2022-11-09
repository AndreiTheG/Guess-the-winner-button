function lock() {
    document.getElementById('answer').setAttribute("disabled", "");
}

function randomWinnerButton() {
    let winnerButton = Math.floor(Math.random() * 3 + 1);
    return winnerButton;
}

function answer() {
    let firstButton = 1, secButton = 2, thirdButton = 3, winnerButton = randomWinnerButton();
    console.log(winnerButton);
    if (winnerButton == firstButton) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else if (winnerButton == secButton) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else if (winnerButton == thirdButton) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else {
        document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';   
    }
    lock();
    console.log('The code is working!');
}