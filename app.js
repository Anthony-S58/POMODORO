
let toggle = document.querySelector(".toggle");
let body = document.querySelector('body');

toggle.addEventListener('click',() => {
    body.classList.toggle('open');
  
});


function getvalue(){

    let sound = document.getElementById("soundoption").checked;
    console.log("sound : " + sound);

    let vibrate = document.getElementById("vibrateoption").checked;
    console.log("vibrate : " + vibrate);

    let wtm = document.getElementById("worktimemin").value;
    let wts = document.getElementById("worktimesec").value;
    console.log("Work session : " + wtm + " minutes" + " et " + wts + " secondes");

    let sb = document.getElementById("shortbreak").value;
    let lb = document.getElementById("longbreak").value;
    console.log("Short break : " + sb + " minutes");
    console.log("Long break : " + lb + " minutes");


}

let play = document.getElementById("play");
let pause = document.getElementById("pause");


play.addEventListener('click', function (){
    play.style.display="none";
    pause.style.display="flex";

});


pause.addEventListener('click', () => {
    pause.style.display="none";
    play.style.display="flex";
});


