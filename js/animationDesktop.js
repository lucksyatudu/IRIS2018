/*
Not to be loaded on systems with lower specifications and on mobile devices.
Requires Processing.
*/

$(document).ready(function () {

	//Mouse Movement Functions
	var halfX=screen.width/2;
	var width=$("#contents").innerWidth();
	
	$(document).focus().mousemove(function(e) {
		var pixelToMove = 2;
		var newValueX = ((halfX-e.pageX) / width) * pixelToMove;
		$("#contents").css('left', newValueX + '%');

		setTimeout(function () {
		  skrollr.get().refresh();
		}, 0);
	});

});