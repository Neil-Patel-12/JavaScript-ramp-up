const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    //code
    e.preventDefault();

    const product = document.querySelector('#product');
    const num = document.querySelector('#qty');

    const prodVal = product.value;
    const numVal = num.value;

    const newLI = document.createElement('li');
    newLI.innerText = `${numVal} ${prodVal}`

    const ul = document.querySelector('#list');
    ul.appendChild(newLI);

    product.value = "";
    num.value = "";
});