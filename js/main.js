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
})

//Post Page Load Functions
function removeLoader() {
  //document.getElementById("section_loader").innerHTML = "Hello World";
  $('#section_loader').delay(400).fadeOut(500);
  $('#contents').delay(400).fadeIn(500);
  $('#aboutIRIS').delay(400).fadeIn(500);
  if(screen.width>=575){
     $('#menu').delay(400).fadeIn(500);
      $('#leftSideber').delay(400).fadeIn(500);
  }
  //$('#contentBody').delay(1000).css({'height':'2000px'});
}

// Scroll Functions
$(window).bind("scroll", function() {
  if ($(this).scrollTop() > 10) {
        $(".navbar").css({'background-color':'rgba(51,51,51,1)'});
    } else {
        $(".navbar").css({'background-color':'rgba(51,51,51,0.8)'});
    }
    /*if ($(this).scrollTop() > 520) {
        $("#contactUs").fadeIn();
        $("#aboutIRIS").stop().fadeOut();
    } else {
        $("#contactUs").stop().fadeOut();
        $("#aboutIRIS").fadeIn();
    }*/
});