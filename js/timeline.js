var viewportWidth, divWidth, tb;
	$(function() {
		
		viewport = $('#container').innerWidth();
		tb = $('#thumbs');
		divWidth = tb.outerWidth();
    /*
		$('#container').mousemove(function(e)
		{
      tb.css({left: ((viewport - divWidth)*((e.pageX / viewport).toFixed(3))).toFixed(1) +"px" });
 		});
    */
    $('.history-block').on('click', function(){
      $('.history-block').css('width', '20vw');
      $('.history-block').find('.title').css('width', '18vw;');
      $('.history-block .timeline').hide(300);
      $(this).css('width', '60vw');
      //$(this).find('.title').css('width', '35vw');
       //$(this).find('.timeline').show(800);
      /*
      $('#container').mousemove(function(e)
        {
          tb.css({left: ((viewport - divWidth-300)*((e.pageX / viewport).toFixed(3))).toFixed(1) + 300 + "px" });
          });*/
    });
    
    /*
    $('.timeline ul li').on('click', function(){
        $(this).parent().blink();
    });
    */
});