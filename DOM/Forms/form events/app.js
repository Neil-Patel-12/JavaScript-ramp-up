// Neil Patel


// form events -> "what happens when we submit a form by default"
// and how we can prevent that behavior. 

const form = document.querySelector('#shelterForm');

const input = document.querySelector('#catName');

const ul_cat = document.querySelector('#cats');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement('li');
    newLI.innerText = catName;

    ul_cat.append(newLI);
    input.value = "";
});