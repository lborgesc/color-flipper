const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btnClick = document.querySelector('button');

btnClick.addEventListener('click', changeColor)

function changeColor() {

    const randomNumber = getRandomNumber();

    document.querySelector('main').style.background = colors[randomNumber];
    document.querySelector('main p').innerText = colors[randomNumber];
}

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}