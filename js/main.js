$(document).ready(function () { 
  // loader
  $(window).load(function(){
    //$('#loader').delay(400).fadeOut(500);
    //$('#content').delay(1000).css({'display':'contents'});
    $('.loader-circle').delay(400).fadeOut(500);
    $('.loader-line-mask').delay(400).fadeOut(500);
    $('.loader-line').delay(400).fadeOut(500);
    $('#continue').delay(400).fadeIn(500);
    //$('.particles-js-canvas-el').css({'z-index':'0'});
  })
});

//Post Page Load Functions
function removeLoader() {
  //document.getElementById("section_loader").innerHTML = "Hello World";
  $('#section_loader').delay(400).fadeOut(500);
  $('#contents').delay(400).fadeIn(500);
  $('#aboutIRIS').delay(400).fadeIn(500);
  //$('.vertical-centered-box').css({'overflow':'auto'})
  if(screen.width>=575){
     $('#menuLg').delay(400).fadeIn(500);
     $('#leftSideber').delay(400).fadeIn(500);
  }else{
    $('#menuSm').delay(400).fadeIn(500);
  }

  setTimeout(function () {
    skrollr.get().refresh();
    //console.log("refreshed");
  }, 500);
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
  if ($(this).scrollTop() > 250) {
        $(".navbar").css({'background-color':'rgba(51,51,51,1)'});
    } else {
        $(".navbar").css({'background-color':'rgba(51,51,51,0.8)'});
    }
});