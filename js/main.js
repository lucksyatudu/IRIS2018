$(document).ready(function () { 
  // loader
  $(window).load(function(){
    //$('#loader').delay(400).fadeOut(500);
    //$('#content').delay(1000).css({'display':'contents'});
    $('.loader-circle').delay(400).fadeOut(500);
    $('.loader-line-mask').delay(400).fadeOut(500);
    $('.loader-line').delay(400).fadeOut(500);
    $('#continue').delay(400).fadeIn(500).addClass("animated fadeInDown");
    //$('.particles-js-canvas-el').css({'z-index':'0'});
  })

  //Smooth Scrolling
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  //jQuery.scrollspeed(100,800); 
});

//Post Page Load Functions
function removeLoader() {
  //document.getElementById("section_loader").innerHTML = "Hello World";
  $('#section_loader').delay(400).addClass("animated fadeOut").fadeOut(50);
  $('#contents').delay(400).fadeIn(200).addClass("animated fadeInUpBig");
  if(screen.width>=575){
     $('#menuLg').delay(400).fadeIn(200).addClass("animated fadeInDown");
     $('#leftSideber').delay(400).fadeIn(500);
  }else{
    $('#menuSm').delay(400).fadeIn(500);
  }

  var s = skrollr.init({
      smoothScrolling: true,
          smoothScrollingDuration: 500
    });

    setTimeout(function () {
      //skrollrRefresh();
      skrollr.get().refresh();
      //console.log("refreshed");
    }, 2500);
}

//Menu related functions for small screen devices
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// Scroll Functions
$(window).bind("scroll", function() {
  if ($(this).scrollTop() > 280) {
        $(".navbar").css({'background-color':'rgba(51,51,51,0.8)'});
    } else {
        $(".navbar").css({'background-color':'rgba(51,51,51,0.8)'});
    }
});