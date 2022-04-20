const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnClick = document.querySelector('button');

btnClick.addEventListener('click', changeColor)

function changeColor() {

    let hexCor = "#";

    for (let i = 0; i < 6; i++) {
        hexCor +=  hex[getRandomNumber()]; 
    }

    document.querySelector('main').style.background = hexCor;
    document.querySelector('main p').innerText = hexCor;
}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

