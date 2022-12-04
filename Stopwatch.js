window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var mins =00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMins = document.getElementById("mins")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var audio = document.getElementById('audio');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
        mins = "00";
        document.body.style.backgroundColor = "yellow";
        
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMins.innerHTML = mins;
    }
    function startTimer () {
      tens++;
      if(mins==0 && seconds==0){
        audio.play();
      }
      if(mins==2 && seconds==0){
        audio.play();
        document.body.style.backgroundColor = "green";
      }
      if(mins==2 && seconds==1){
        audio.play();
      }
      if(mins==3 && seconds==0){
        audio.play();
        document.body.style.backgroundColor = "red";
      }
      if(mins==3 && seconds==1){
        audio.play();
      }
      if(mins==3 && seconds==2){
        audio.play();
      }
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
      if (seconds > 59) {
        console.log("mins");
        mins++;
        appendMins.innerHTML = "0" + mins;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
      }
    }
  }