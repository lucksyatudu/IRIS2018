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