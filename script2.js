function button() {
    let numButtons = document.querySelector('input').value;
    document.getElementById('sentence').innerHTML = 'Choose the winner button!';
    for (let i = 0; i < numButtons; i++) {
        document.getElementById('button').innerHTML += '<button id="button' + (i + 1) +'" type="button"' 
        + 'class="btn btn-primary" value = "' + i + 1 + '"" onclick="answer()">Button ' + (i + 1) + '</button> ';
    }
    document.getElementById('submit').disabled = true;
}

function disableBtn() {
    let numButtons = document.querySelector('input').value;
    for (let i = 0; i < numButtons; i++) {
        document.getElementById('button' + (i + 1) + '').disabled = true;
    }
}

function answer(max) {
    let numButtons = document.querySelector('input').value;
    let winnerButton = 2, isWinnerButton = false;
    for (let i = 0; i < numButtons; i++) {
        if (winnerButton == i + 1) {
            document.getElementById('ans').innerHTML = '<br>Congrats! You won!';
            isWinnerButton = true;
            break;
        }
    }
    if (isWinnerButton == false) {
        document.getElementById('ans').innerHTML = '<br>Congrats! You won!';
    }
    /*let ans = Math.floor(Math.random() * max);
    if (ans == 1) {
        document.getElementById('ans').innerHTML = '<br>Congrats! You won!';
    } else if (ans == 0) {
        document.getElementById('ans').innerHTML = '<br>Wrong button! Try again!';
    }*/
    disableBtn();
}