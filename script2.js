function button() {
    let numButtons = document.querySelector('input').value;
    document.getElementById('sentence').innerHTML = 'Choose the winner button!'
    for (let i = 0; i < numButtons; i++) {
        document.getElementById('button').innerHTML += '<button id="button' + (i + 1) +'" type="button"' 
        + 'class="btn btn-primary" onclick="answer(2)">Button ' + (i + 1) + '</button> ';
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
    let ans = Math.floor(Math.random() * max);
    if (ans == 1) {
        document.getElementById('ans').innerHTML = '<br>Congrats! You won!';
    } else if (ans == 0) {
        document.getElementById('ans').innerHTML = '<br>Wrong button! Try again!';
    }
    disableBtn();
}