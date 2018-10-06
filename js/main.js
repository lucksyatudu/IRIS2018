$(document).ready(function () { 
  // loader
  $(window).load(function(){
    //$('#loader').delay(400).fadeOut(500);
    //$('#content').delay(1000).css({'display':'contents'});
    $('.loader-circle').delay(400).fadeOut(500);
    $('.loader-line-mask').delay(400).fadeOut(500);
    $('.loader-line').delay(400).fadeOut(500);
    $('#continue').delay(400).fadeIn(500).addClass("animated fadeInDown");
    $('#landing_text').delay(1000).fadeIn(1000).addClass("animated fadeIn");
    $('.logo').delay(400).animate({
      top: '30%'
    }),2000;
    //$('.particles-js-canvas-el').css({'z-index':'0'});
  })

  var message=["IIM Indore's Annual <br> Cultural, Managment and Sports Festival","16 - 18 Nov'18"];
  var flag=false;
  function fader() {
    $("#landing_text p").fadeOut(1800, function() {
      flag=!flag;
      if(flag){
        $('#landing_text').css({'margin-left':'-235px'});
        $(this).html(message[0]).delay(300).fadeIn(1500);
      }else{
        $('#landing_text').css({'margin-left':'-70px'});
        $(this).html(message[1]).delay(300).fadeIn(1500);
      }
    });
  }
  fader();                    // run once now
  setInterval(fader, 3600);

  //Smooth Scrolling
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      if(hash!='#register'){
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    }
  });
  
  //jQuery.scrollspeed(100,800); 
});

//Post Page Load Functions
function removeLoader() {
  //document.getElementById("section_loader").innerHTML = "Hello World";
  $('#section_loader').delay(400).addClass("animated fadeOut").fadeOut(50);
  $('#bgVideo').delay(400).addClass("animated fadeOut").fadeOut(50);
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
        $(".navbar").css({'background-color':'rgba(51,51,51,0)'});
    }
});

var keydowns=0;
/*
var tags=["#headings","#line1","#knowUsEntry","#aboutIRIS","#pronitesEntry",
            "#pronites","#envisionEntry","#envision","#eventsEntry","#events",
            "#sportsEntry","#sports","#sponsorsEntry","#sponsors","#gallery","#contactUs"];
            */

var tags=["#headings","#line1","#svgImg2","#aboutIRIS","#svgImg3",
            "#pronites","#svgImg4","#envision","#svgImg5","#events",
            "#svgImg6","#sports","#svgImg7","#sponsors","#gallery","#contactUs"];

/*
var tags=["#headings","#line1","#aboutIRIS",
            "#pronites","#envision","#events",
            "#sports","#sponsors","#gallery","#contactUs"];
*/
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        break;

        case 38: // up
        if(keydowns>0){
          keydowns--;
          var hash = tags[keydowns];
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1500, function(){
            //window.location.hash = hash;
          });
        }       
        //console.log("J: "+keydowns);   
        break;

        case 39: // right
        break;

        case 40: // down
        if(keydowns<tags.length){
          keydowns++;
          var hash = tags[keydowns];
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1500, function(){
            //window.location.hash = hash;
          });
        }
        //console.log("J: "+keydowns);
          //console.log("down")
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

/* Register Panel */
function openRegNav() {
    document.getElementById("regPanel").style.width = "25%";
    document.getElementById("regPanel").style.left = "75%";
}

function closeRegNav() {
    document.getElementById("regPanel").style.width = "0";
    document.getElementById("regPanel").style.left = "0";
}

function scrollToTop(){
  $('html, body').animate({
      scrollTop: 0
    }, 500, function(){
    window.location.hash = "";
  });
}