function lock() {
    document.getElementById('button1').setAttribute("disabled", "");
    document.getElementById('button2').setAttribute("disabled", "");
    document.getElementById('button3').setAttribute("disabled", "");
}

function randomWinnerButton() {
    let winnerButton = Math.floor(Math.random() * 3 + 1);
    return winnerButton;
}

function firstButton() {
    let numButton = 1, winnerButton = randomWinnerButton();
    if (numButton == winnerButton) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else {
        document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';   
    }
    lock();
    console.log('The code is working!');
}

function secondButton() {
    let numButton = 2, winnerButton = randomWinnerButton();
    if (numButton == winnerButton) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else {
        document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';   
    }
    lock();
    console.log('The code is working!');   
}

function thirdButton() {
    let numButton = 3, winnerButton = randomWinnerButton();
    if (numButton == winnerButton) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else {
        document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';   
    }
    lock();
    console.log('The code is working!');
}