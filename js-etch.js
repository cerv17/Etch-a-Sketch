const body = document.querySelector('body');
function grid(number){
    for(let i = 0; i < number; i++){
        const container = document.createElement('div');
        container.classList.add('container');
        for (let j = 0; j < number; j++){
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
        }
        body.appendChild(container);
    }
    //testing
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.addEventListener('mouseover', () => square.style.backgroundColor = 'black'));
}
let number = 0;
const button = document.querySelector('button');
button.addEventListener('click', () => {
    number = prompt('Grid Side Length: ');
    grid(parseInt(number));
    });





