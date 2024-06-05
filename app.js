// const startbtn = document.getElementById("startbtn");
// const stopbtn = document.getElementById("stopbtn");
// const resetbtn = document.getElementById("resetbtn");


const display = document.getElementById("display")
let timer = null;
let startTimer = 0;
let elapsedTime = 0;
let isRunning = 0;

function start(){

    if(isRunning){
        startTimer = Date.now() - elapsedTime;
        timer = setInterval(update, 10)
        isRunning = true;
    }
}

function stop(){

}

function reset(){

}

function update(){
   const currentTime = Date.now();
   elapsedTime = currentTime - startTimer;

   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
   let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
   let seconds = Math.floor(elapsedTime / 1000 % 60);
   let milliseconds = Math.floor(elapsedTime % 1000 / 10);

   display.textContent = `${hours}:${seconds}:${milliseconds}`;
}