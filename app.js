
let toggle = document.querySelector(".toggle");
let body = document.querySelector('body');

toggle.addEventListener('click',() => {
    body.classList.toggle('open');
  
});

let play = document.getElementById("play");
let pause = document.getElementById("pause");



play.addEventListener('click', function (){
    play.style.display="none";
    pause.style.display="flex";

 
});

min = document.getElementById("#worktimemin".value);
minutes = document.getElementById("minutes");
var cpt = min;

// minutes.innerHTML= min;

console.log(min);



timer = setInterval(function(){
    if(cpt>0){
        --cpt;
        document.getElementById("#secondes").innerHTML = cpt ;
    }else{
        clearInterval(timer);
    }
}, 1000);

pause.addEventListener('click', () => {
    pause.style.display="none";
    play.style.display="flex";
});


