/*
Not to be loaded on systems with lower specifications and on mobile devices.
Requires Processing.
*/
//GPU
/*
const gpu = new GPU();
const skrollrRefresh = gpu.createKernel(function() {
	try{
    	skrollr.get().refresh();
	}catch(e){}
}).setOutput([512, 512])*/

$(document).ready(function () {

	//Mouse Movement Functions
	var halfX=screen.width/2;
	var width=$("#contents").innerWidth();

	var elementsToBeRefreshed=["#line1","#line1","#line3","#line4","#line5","#line6","#line7","#line8","#line9","#line10","hr"];
	
	var oldX=0;
	$('#content_body').focus().mousemove(function(e) {
		var pixelToMove = 2;
		if(oldX!=e.pageX){
			oldX=e.pageX;
			var newValueX = ((halfX-e.pageX) / width) * pixelToMove;
			$("#contents").css('left', newValueX + '%');


			setTimeout(function () {
			  //skrollrRefresh();
			 // skrollr.get().refresh();
			}, 0);
			
		}
	});
});

//var initialColors=["#150921","#29323c","red","#42275a","#141e30","#8E0E00","#76b852","#fc00ff"];
//var finalColors=["#411b4a","#485563","yellow","#734b6d","#243b55","#1F1C18","#8DC26F","#00dbde"];

var initialColors=["#150921","#29323c","#B993D6","#3E5151","#22c1c3","#cb2d3e","#2C3E50","#fc00ff"];
var finalColors=["#411b4a","#485563","#8CA6DB","#DECBA4","#fdbb2d","#ef473a","#4CA1AF","#00dbde"];

$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();
	var headingsOffset = $("#headings").offset().top;
	var line1Offset = $("#line1").offset().top;
	var svhImg2Offset = $("#svgImg2").offset().top;
	var svgImg3Offset = $("#svgImg3").offset().top;
    var svgImg4Offset = $("#svgImg4").offset().top;
    var svgImg5Offset = $("#svgImg5").offset().top;
    var svgImg6Offset = $("#svgImg6").offset().top;
    var svgImg7Offset = $("#svgImg7").offset().top;
    var galleryOffset = $("#gallery").offset().top;
    var contactUsOffset = $("#contactUs").offset().top;
    var aboutIrisOffset = $("#aboutIRIS").offset().top;
    var pronitesOffset = $("#pronites").offset().top;
    var envisionOffset = $("#envision").offset().top;
    var eventsOffset = $("#events").offset().top;
    var sportsOffset = $("#sports").offset().top;
    var sponsorsOffset = $("#sponsors").offset().top;
    var offsets=[
	    $("#headings").offset().top,
		$("#line1").offset().top,
		$("#svgImg2").offset().top,
		$("#aboutIRIS").offset().top,
		$("#svgImg3").offset().top,
		$("#pronites").offset().top,
	    $("#svgImg4").offset().top,
	    $("#envision").offset().top,
	    $("#svgImg5").offset().top,
	    $("#events").offset().top,
	    $("#svgImg6").offset().top,
	    $("#sports").offset().top,
	    $("#svgImg7").offset().top,
	    $("#gallery").offset().top,
	    $("#sponsors").offset().top,
	    $("#contactUs").offset().top
    ];

    for(var i=0;i<offsets.length;i++){
    	if(currentScroll>offsets[i]){
    		keydowns=i+1;
    	}else{
    		//console.log("b"+i);
    		break;
    	}
    }
    
	//console.log(currentScroll);
	var cssValue="linear-gradient(to bottom right, "
	if(currentScroll>aboutIrisOffset){
		if(currentScroll>pronitesOffset){
			if(currentScroll>envisionOffset){
				if(currentScroll>eventsOffset){
					if(currentScroll>sportsOffset){
						if(currentScroll>sponsorsOffset){
							cssValue=cssValue+initialColors[6]+' , '+finalColors[6]+' )';
							//keydowns=14;
						}else{
							cssValue=cssValue+initialColors[5]+' , '+finalColors[5]+' )';
							//keydowns=13;
						}
					}else{
						cssValue=cssValue+initialColors[4]+' , '+finalColors[4]+' )';
						//keydowns=11;
					}
				}else{
					cssValue=cssValue+initialColors[3]+' , '+finalColors[3]+' )';
					//keydowns=9;
				}
			}else{
				cssValue=cssValue+initialColors[2]+' , '+finalColors[2]+' )';
				//keydowns=7;
			}
		}else{
			cssValue=cssValue+initialColors[1]+' , '+finalColors[1]+' )';
			//keydowns=5;
		}
	}else{
		cssValue=cssValue+initialColors[0]+' , '+finalColors[0]+' )';
		//keydowns=3;
	}


	$(".vertical-centered-box").css('background',cssValue);
	//$(".vertical-centered-box").animate({background:cssValue});
	//console.log("AJ: ");
});