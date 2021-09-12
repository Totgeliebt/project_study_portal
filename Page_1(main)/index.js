'use strict'
window.onload = function(){
    window.setInterval(function(){
        let now = new Date();
        let clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);


let modal = document.getElementById('user'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    modal.addEventListener('click', function() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
    close.addEventListener('click', function() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
})
};