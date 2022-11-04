function lock() {
    document.getElementById('button1').setAttribute("disabled", "");
    document.getElementById('button2').setAttribute("disabled", "");
    document.getElementById('button3').setAttribute("disabled", "");
}

function firstButton() {
    document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';   
    lock();
    console.log('The code is working!');
}

function secondButton() {
    document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';
    lock();
    console.log('The code is working!');   
}

function thirdButton() {
    document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    lock();
    console.log('The code is working!');
}