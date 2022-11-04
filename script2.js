function button() {
    let numButtons = document.querySelector('input').value;
    document.getElementById('sentence').innerHTML = 'Choose the winner button!';
    for (let i = 0; i < numButtons; i++) {
        document.getElementById('button').innerHTML += '<button id="button' + (i + 1) +'" type="button"' 
        + 'class="btn btn-primary" value = ""' + i + 1 + '"" onclick="answer(' + (i + 1) + ')" ">Button ' + (i + 1) + '</button> ';
    }
    document.getElementById('submit').disabled = true;
}

function disableBtn() {
    let numButtons = document.querySelector('input').value;
    for (let i = 0; i < numButtons; i++) {
        document.getElementById('button' + (i + 1) + '').disabled = true;
    }
}

function answer(value) {
    let numButtons = document.querySelector('input').value;
    //randomise choose the winner button
    let winnerButton = Math.floor(Math.random() * numButtons + 1);
    if (value == winnerButton) {
        document.getElementById('ans').innerHTML = '<br>Congrats! You won!';
    } else {
        document.getElementById('ans').innerHTML = '<br>Wrong button! Try again!';
    }
    disableBtn();
}