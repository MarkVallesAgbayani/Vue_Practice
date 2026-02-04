const btn = document.querySelector('#toggleMessage');
const message = document.querySelector('#message');
const body = document.querySelector('body');

btn.addEventListener("click", function() {
    message.classList.toggle("toggle");
    body.classList.toggle("bg");
});