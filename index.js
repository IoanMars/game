const body = document.querySelector('body');
const div = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
const span = document.createElement('span');
const p = document.createElement('p');
const victoryNumber = Math.floor(Math.random() * 10);
const clicks = 0;

body.appendChild(div);
div.appendChild(span);
div.appendChild(input);
div.appendChild(button);
div.appendChild(p);

div.classList.add('game');
span.classList.add('textSpan');
button.classList.add('gameClick');
input.classList.add('fieldForNumbers');

span.innerText = 'enter your lucky number';
button.innerText = 'to victory';
input.placeholder = 'luck number';
input.setAttribute('type', 'number');
input.setAttribute('value', '');

button.addEventListener = () => {
    clicks++;
}

button.onclick = function() {
    const numberUser = input.value;

    if (numberUser < victoryNumber) {
        p.innerText = 'more than a given. try again';
    } else if (numberUser > victoryNumber) {
        p.innerText = 'less than specified. try again';
    } else if (numberUser === undefined) {
        p.innerText = 'enter your lucky number';
    } else {
        p.innerText = 'Congratulations on your victory ' + button.value;
    }
}

console.log(input.value);
console.log(victoryNumber);
console.log(clicks);
