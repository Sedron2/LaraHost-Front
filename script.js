let main = document.getElementById('main');

main.style.height = window.innerHeight/1.2  + 'px';

window.addEventListener('resize', () => {main.style.height = window.innerHeight/1.2  + 'px';})

