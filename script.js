function lock() {
    document.getElementById('button1').setAttribute("disabled", "");
    document.getElementById('button2').setAttribute("disabled", "");
    document.getElementById('button3').setAttribute("disabled", "");
}

function answer(value) {
    let winnerNum = Math.floor(Math.random * 3 + 1);
    document.getElementById('output').innerHTML = '<br> Wrong button! Try again!';   
    lock();
    console.log('The code is working!');
}