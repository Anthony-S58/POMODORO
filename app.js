let settings = document.getElementById("settings");
let gear = document.getElementById("gear");
let exit = document.getElementById("close");
let sound = document.querySelector("#sound");
let time = document.querySelector("#time");

let toggle = document.querySelector(".toggle");
let body = document.querySelector('body');



toggle.addEventListener('click',() => {
    body.classList.toggle('open');
  
});

// exit.addEventListener('click',() => {
//     settings.style.width="80px";
//     settings.style.height="80px";
//     settings.style.borderRadius="80px";
//     settings.style.top="-15px";
//     settings.style.left="-15px";
//     exit.style.display="none";
//     gear.style.display="flex";
   
//  });

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
