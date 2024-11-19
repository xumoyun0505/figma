function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    
    let currentTime = hour + ":" + minute + ":" + second;
    document.getElementById("clock").innerText = currentTime;
    
    setTimeout(showTime, 1000);
  }
  
  showTime();