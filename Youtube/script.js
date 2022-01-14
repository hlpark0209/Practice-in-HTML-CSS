'use strict';

const toggleBtn = document.querySelector('.fa-caret-down');
const title = document.querySelector('.info__title h4');


// title toggle
// toggleBtn.addEventListener('click', () => {


// });

//make header fixed when scroll
const header = document.querySelector('.header');
const video = document.querySelector('.view');
const headerHeight = header.getBoundingClientRect().height;
console.log(headerHeight);

document.addEventListener('scroll', () => {
    
    if(window.scrollY > headerHeight) {
        video.classList.add('header-white');
    } else{
        video.classList.remove('header-white');
    }
});
