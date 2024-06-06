const v2Button = document.querySelector('#v2');

v2Button.onclick = function () {
    console.log("You Clicked Me");
    console.log("I hope this works");
}

function screem() {
    console.log("AAAHHH");
    console.log("STOP TOUCHING ME!");
}

v2Button.onclick = screem;
// there are a lot of on properties.


const btn3 = document.querySelector("#v3");
btn3.addEventListener('click', function () {
    alert("sound on");
});



function twist() {
    console.log('TWIST!');
}
function shout() {
    console.log('SHOUT!');
}
const tasBut = document.querySelector('#tas');

tasBut.addEventListener('click', twist);
tasBut.addEventListener('click', shout);