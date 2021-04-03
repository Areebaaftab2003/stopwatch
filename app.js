




// var a = document.getElementById ("text")

// function start(){
//     console.log(a)
// }



// function timer(){
//     console.log("running...")
// }

// setInterval(timer,1000)

// function timeOut(){
//     console.log("running...")
// }

// setTimeout(timeOut,5000)




// var interval;

// var count =0;

// function timer(){
//     count++
//     console.log(count)
// }
// timer()


// interval = setInterval(timer,1000)

// setTimeout(function(){
//     clearInterval(interval)
// }
// ,5000
// )













var min = 0;
var sec = 0;
var msec = 0;

var minHeading  = document.getElementById("min");
var secHeading  = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML= msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec
        msec=0;
    }else if(sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec=0;
    }
}

function start(){
    interval= setInterval(timer,10);
 }

 function stop(){
     clearInterval(interval)
 }

 function reset(){
     min = 0;
     sec = 0;
     msec = 0;
     minHeading.innerHTML= min;
     secHeading.innerHTML = sec;
     msecHeading.innerHTML = msec;
   stop()

 }