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

	/*
	  #29323c , #485563
	  red, yellow
	  #42275a , #734b6d 
	  #141e30 , #243b55
	  
	  background-image: linear-gradient(to bottom right, #150921 , #411b4a );
	*/

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

var initialColors=["#150921","#29323c","red","#42275a","#141e30","#8E0E00","#76b852","#fc00ff"];
var finalColors=["#411b4a","#485563","yellow","#734b6d","#243b55","#1F1C18","#8DC26F","#00dbde"];

$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();
    var aboutIrisOffset = $("#aboutIRIS").offset().top;
    var pronitesOffset = $("#pronites").offset().top;
    var envisionOffset = $("#envision").offset().top;
    var eventsOffset = $("#events").offset().top;
    var sportsOffset = $("#sports").offset().top;
    var sponsorsOffset = $("#sponsors").offset().top;
    
	//console.log(currentScroll);
	var cssValue="linear-gradient(to bottom right, "
	if(currentScroll>aboutIrisOffset){
		if(currentScroll>pronitesOffset){
			if(currentScroll>envisionOffset){
				if(currentScroll>eventsOffset){
					if(currentScroll>sportsOffset){
						if(currentScroll>sponsorsOffset){
							cssValue=cssValue+initialColors[6]+' , '+finalColors[6]+' )';
						}else{
							cssValue=cssValue+initialColors[5]+' , '+finalColors[5]+' )';
						}
					}else{
						cssValue=cssValue+initialColors[4]+' , '+finalColors[4]+' )';
					}
				}else{
					cssValue=cssValue+initialColors[3]+' , '+finalColors[3]+' )';
				}
			}else{
				cssValue=cssValue+initialColors[2]+' , '+finalColors[2]+' )';
			}
		}else{
			cssValue=cssValue+initialColors[1]+' , '+finalColors[1]+' )';
		}
	}else{
		cssValue=cssValue+initialColors[0]+' , '+finalColors[0]+' )';
	}

	$(".vertical-centered-box").css('background-image',cssValue);
});