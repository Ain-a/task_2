
const stopWatch = document.getElementById('stopWatch');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let timerId;
let elapseMs = 0;   //追加した

function timeToString(millis) {
    const ms = millis % 1000;
    const s = Math.floor(millis / 1000) % 60;
    const m = Math.floor(millis / 1000 / 60) % 60;
    const hr = Math.floor(millis / 1000 / 60 / 60);

    const formatMs = ms.toString().padStart(3,'0');
    const formatS = s.toString().padStart(2,'0');
    const formatM = m.toString().padStart(2,'0');
    const formatHr = hr.toString().padStart(2,'0');
    
    return `${formatHr}.${formatM}.${formatS}.${formatMs}`;
}

start.addEventListener('click',() => {
    let startMs = Date.now(); //スタートボタンを押した時点　開始時間ミリ秒　x
    startMs -= elapseMs;
    
    timerId = setInterval(() => {  
        const nowMs = Date.now();　 // y
        elapseMs = nowMs - startMs; //経過秒数取得 y-x
        
        stopWatch.textContent = timeToString(elapseMs);

        //スタートボタンを押した時
        start.disabled = true;
        stop.disabled = false;
        reset.disabled = false;

    },10);

})

//ストップボタン
stop.addEventListener('click',() => {
        clearInterval(timerId);

        //ストップボタンを押した時
        start.disabled = false;
        stop.disabled = true;
        reset.disabled = false;


})

//リセットボタン
reset.addEventListener('click', () => {
        clearInterval(timerId);
        elapseMs = 0;
        stopWatch.textContent = '00.00.00.00';

        //リセットボタンを押した時
        start.disabled = false;
        stop.disabled = true;
        reset.disabled = true;


})


//jQuery
$(document).ready(function(){
    $("#start").hover(
        function() {
        $(this).css("background-color","#FFD5EC");
      },
        function() {
        $(this).css("background-color","#EEEEEE");
        });

    $("#stop").hover(
        function() {
        $(this).css("background-color","#D9E5FF");
      },
        function() {
        $(this).css("background-color","#EEEEEE");
        });

    $("#reset").hover(
        function() {
        $(this).css("background-color","#FFDBC9");
        },
        function() {
        $(this).css("background-color","#EEEEEE");
        });
            
  });
  

