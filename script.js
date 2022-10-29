function lock() {
    document.getElementById('button1').setAttribute("disabled", "");
    document.getElementById('button2').setAttribute("disabled", "");
    document.getElementById('button3').setAttribute("disabled", "");
}

function answer(max) {
    let ans = Math.floor(Math.random() * max);
    if (ans == 1) {
        document.getElementById('output').innerHTML = '<br> Congrats! You won!';
    } else if (ans == 0) {
        document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';
    }
    lock();
    console.log('The code is working!');
}