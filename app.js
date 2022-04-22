
let toggle = document.querySelector(".toggle");
let body = document.querySelector('body');

toggle.addEventListener('click',() => {
    body.classList.toggle('open');
  
});

let play = document.getElementById("play");
let pause = document.getElementById("pause");

play.addEventListener('click', () => {
    play.style.display="none";
    pause.style.display="flex";
});

pause.addEventListener('click', () => {
    pause.style.display="none";
    play.style.display="flex";
});
