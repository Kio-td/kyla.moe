'use strict';

alert('oh no! not another alert!');

function rain() {
  let falling = document.getElementsByClassName('falling');
  console.log('[info] there are ' + falling.length + ' things falling');
  for (const el of falling) {
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${Math.random() * 50}%`;
    el.style.setProperty('--offset-angle', `${Math.random() * 360}deg`);
  }
}

window.addEventListener('DOMContentLoaded', rain);

