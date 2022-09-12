let clock = document.getElementById("myClock")


function showTime(e) {
 
  setInterval(() => {
    let today = new Date()
    clock.innerHTML = today.toLocaleTimeString()
  },1000)
}

