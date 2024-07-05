const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
;
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animetion ='none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animetion ='none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game-over.png';
        mario.style.marginLeft = '50px'
        mario.style.width = '75px';

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump)