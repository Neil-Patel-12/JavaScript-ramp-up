



const input = document.querySelector('input');

const h1 = document.querySelector("h1");

// when there is a change to the input text. we print
input.addEventListener('change', function (e) {
    console.log("jdhjfhdjhfdjf");
});

// everytime you type in the input text, we print
input.addEventListener('input', function (e) {
    h1.innerText = input.value;
    console.log("INPUT !");
    e.stopPropagation();
});