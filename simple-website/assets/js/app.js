'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme')

  let className = document.body.className;
  className == 'light-theme' 
    ? this.textContent = 'Dark' 
    : this.textContent = 'Light';
});