/*
var height=0;



var getHeight=function(){
	var body = document.body,
    html = document.documentElement;

	var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

	console.log(height);
}


var draw=function(){
	var bgCanvas1=document.querySelector("#bgCanvas-1");
	console.log(bgCanvas1);
	//bgCanvas1.height="6000px";

	var c=bgCanvas1.getContext('2d');
	//c.fillRect(10,10,100,50);
	
	var image = new Image();
	image.src="img/dots.png";
	image.onLoad=function(){
		for(var i=0;i<bgCanvas1.width;i+=50){
			for(var j=0;j<=bgCanvas1.height;j+=50){
				c.drawImage(image,i,j);
			}
		}
	}
	
	
}*/

