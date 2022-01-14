'use strict';

const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

function mobileMenu(btn){
    menu.classList.toggle('active');
    contact.classList.toggle('active');
    
}

toggleBtn.addEventListener('click', mobileMenu); 