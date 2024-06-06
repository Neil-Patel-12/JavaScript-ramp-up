const button = document.querySelector('button');

// the "event object" is automaticaly passed in

// need to use the "event object" when we are working with keyboard events (like what key was pressed)

button.addEventListener('click', function (evt) {
    console.log(evt);
});

const input = document.querySelector('input');
input.addEventListener('keydown', function () {
    console.log("KEY DOWN!");
});

input.addEventListener('keyup', function () {
    console.log("KEY UP!");
});

input.addEventListener('keydown', function (e) {
    console.log(e);
    console.log(e.key);
    console.log(e.code);
});

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
        case 'ArrowRight':
            console.log('RIGHT!');
            break;
        default:
            console.log("ignored!");
    }
});