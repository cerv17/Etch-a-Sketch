const body = document.querySelector('body');
const view = document.querySelector("#view");
const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.style.backgroundColor = "white");
});
function randomRGB(){
    return "rgb( " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}
function grid(number){
    view.innerHTML = "";
    for(let i = 0; i < number; i++){
        const container = document.createElement('div');
        container.classList.add('container');
        for (let j = 0; j < number; j++){
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
        }
        view.appendChild(container);
    }
    //testing
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.addEventListener('mouseover', () => square.style.backgroundColor = randomRGB()));
}
let number = 0;
const button = document.querySelector('button');
button.addEventListener('click', () => {
    number = prompt('Grid Side Length: ');
    grid(parseInt(number));
    });





