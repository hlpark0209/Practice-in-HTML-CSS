'use strict';

const toggleBtn = document.querySelector('.fa-caret-down');
const title = document.querySelector('.info__title h4');


// title toggle
toggleBtn.addEventListener('click', () => {
    title.classList.toggle('clamp');
    toggleBtn.classList.toggle('rotate');

});


