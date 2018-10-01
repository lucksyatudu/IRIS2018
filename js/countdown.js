// Set the date we're counting down to
var countDownDate = new Date("Nov 16, 2018 5:30:00").getTime();

// Update the count down every 1 second
var countdownFunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(days<0){
    days=0;
    hours=0;
    minutes=0;
    seconds=0;
  }

  // Display the result in the element with id="demo"
  document.getElementById("cd_days").innerHTML = days;
  document.getElementById("cd_hrs").innerHTML = hours;
  document.getElementById("cd_mins").innerHTML = minutes;
  document.getElementById("cd_sec").innerHTML = seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);