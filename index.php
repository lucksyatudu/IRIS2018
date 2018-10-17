<!DOCTYPE html>
<html>
	<head>
	 	<meta charset="utf-8">
	 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	 	<meta name="viewport" content="width=device-width, initial-scale=1">

	 	<!-- Basic page information -->
        <meta name="author" content="IRIS 2018">
        <meta name="description" content="IRIS 2018 - The annual cultural and management festival, IIM Indore">
        <meta name="keywords" content="IRIS, Indore, IIM, IIT, Finance, Fest, Festival, cultural, India, techfest, marketing, commerce, stock, economics, music">

		<title>IRIS'18 - IIM Indore</title>

		<link rel="icon" href="img/favicon.ico" type="image/gif" sizes="30x30">

		<!-- CSS -->
		<link href="css/loader-style.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
		<link href="css/canvas-style.css" rel="stylesheet">
		<link href="css/timeline.css" rel="stylesheet">

		<!-- Load an icon library -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

		<!-- CSS Libraries -->
		<link rel="stylesheet" href="lib/animate.css">		

		<!-- Bootstrap -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

		<!-- Font -->
		<link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet">
		<link rel="stylesheet" href="css/font.css">	

		<!-- JavaScript Libraries -->
		<script type="text/javascript" src="lib/jquery.min.js"></script>
		<script src="lib/angular.min.js"></script>
		<script src="lib/angular-route.min.js"></script>
		<script src="lib/anime.min.js"></script>
		<script src="lib/angular-animate.min.js"></script>
		<script src="lib/jquery.visible.min.js"></script>
		<!--<script src="lib/gpu.js"></script>-->

		<!-- JavaScript Scripts -->
		<script type="text/javascript" src="js/main.js"></script>
		<script type="text/javascript" src="js/irisController.js"></script>
		<script type="text/javascript" src="js/animationDesktop.js"></script>
		<script type="text/javascript" src="js/canvas.js"></script>
		<script type="text/javascript" src="js/countdown.js"></script>
		<script type="text/javascript" src="js/timeline.js"></script>

	</head>

	<body ng-app="IrisApp" ng-controller="irisController">
		<div class="container-fluid p-0">
			
			<!-- Loader -->
			<section>
				<div  id="loader">
					<div  class="vertical-centered-box">
						<div>
							<video autoplay muted loop id="bgVideo" style="left: 50%;
    							top: 50%;
							    height: 100%;
							    width: 100%;
							    overflow: hidden;
							    object-fit: fill;
							    position: absolute;
							    transform: translate(-50%,-50%);
							    display: inline-block;">
							  <source src="Untitled.mp4" type="video/mp4">
							</video>
						</div>
						<div id="particles-js" class="particle-container-box">
					  		<div id="particles-js" class="content">
					  			<div id="section_loader">
						  			<div class="logo">
										<img src="img/logo-svg.svg" width="75" id="prism-logo">
									</div>
						    		<div class="loader-circle"></div>
						    		<div class="loader-line-mask">
						      			<div class="loader-line"></div>  
						    		</div>

						    		<!-- Text -->
						    		<div id="landing_text">
						    			<p></p>
						    		</div>
						    		<!-- Text -->

						    		<!-- Continue -->
						    		<div id="continue">
						    			<button class="enter_btn" onclick="removeLoader()">Launch Now</button>
						    		</div>
						    		<!-- Continue -->
					    		</div>
					    		<script src="js/particles.js"></script>
								<script src="js/app.js"></script>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- Loader -->

			<!--
			<?php
		    	include "pages/canvas/background-layers.html";
		    ?> -->

			<!-- Contents -->
			<section>
				<div id="content_body">
					<div>
						<div>
							<div>			

					    		<!-- Menu -->
					    		<?php
					    			include "pages/menu-sm.html";
					    			include "pages/menu.html";
					    		?>
					    		<!-- Menu -->

					    		<!-- Left Panel -->
					    		<div id="leftSideber" class="hidden-sm-down">
					    			<div class="sidebar">
									  	<a href="https://www.facebook.com/iris.iimi"  target="_blank"><i class="fa fa-fw fa-facebook"></i></a>
									  	<a href="https://www.instagram.com/iris_iimi/"  target="_blank">
									  		<i class="fa fa-fw fa-instagram"></i></a>
									  	<a href="https://twitter.com/Iris_IIMI"  target="_blank"><i class="fa fa-fw fa-twitter"></i></a>
									  	<a href="https://www.youtube.com/channel/UCXVT_s3a61W9YZ7LBo0at4Q"  target="_blank">
									  		<i class="fa fa-fw fa-youtube-play"></i></a>
									  	<a href="https://en.wikipedia.org/wiki/IRIS_(Management_Festival)"  target="_blank">
									  		<i class="fa fa-fw fa-wikipedia-w"></i></a>
									</div>
					    		</div>
					    		<!-- Left Panel -->

					    		<!-- Campus Ambassador -->
					    		<div id="caRibbon" class="corner-ribbon bottom-right sticky red shadow">
					    			Become a Campus Ambassador
					    		</div>
					    		<?php
					    			include "pages/campusAmbassador.html";
					    		?>
					    		<!-- Campus Ambassador -->

					    		

					    		<!-- Register Panel -->
					    		<div id="regPanel" class="regnav">
								  <a href="javascript:void(0)" class="closebtn" onclick="closeRegNav()">&times;</a>
								  <a href="https://dare2compete.com/f/iris-2018-indian-institute-of-management-iim-indore-3613"
								   target="_blank">
								  	<div>
								  		<h3>Events</h3>
								  		<h6>Register for Events</h6>
								  	</div>
								  	</a>
								  	<hr style="border: 1px;border-top: 1px solid rgba(255,255,255,1);">
								  <a href="https://www.thecollegefever.com/events/iris18-cultural-and-management-fest-of-iim-indore"
								   target="_blank"><div>
								  		<h3>Accomodation</h3>
								  		<h6>Book Your Accomodation for IRIS.<br>
								  		Aaccess to all pronites included with Accomodation.</h6>
								  	</div></a>
								  	<hr style="border: 1px;border-top: 1px solid rgba(255,255,255,1);">
								  <a href="https://www.thecollegefever.com/events/iris18-sports" target="_blank"><div>
								  		<h3>Sports</h3>
								  		<h6>Pay Rs 500, play any number of sports</h6>
								  	</div></a>
								</div>
								<!-- Register Panel -->

					    		<!-- Page Contents -->
					    		<div id="contents">
					    			<!-- Headings -->
					    			<div id="headings" class="container">
					    				<div class="row">
					    					<div class="col-lg-5 col-md-6 col-sm-12 col-xs-12">
				    							<div class="row heading">IRIS</div>
				    							<div class="row heading" style="margin-top:-25px">'18</div>
				    							<div class="row headingChild" style="margin-top: 15px">THE</div>
				    							<div class="row headingChild" style="margin-top:-25px">FUTURE</div>
				    							<div class="row headingChild" style="margin-top:-25px">NOW</div>
				    							<div class="row headingChild" style="margin-top:-25px">STREAMING.</div>
					    					</div>
					    					<div class="col-lg-7 col-md-6 col-sm-12 col-xs-12 p-0 float-right">
					    						<div style="border-radius: 10px;float: right; height: 100%; width: 100%">
					    							<iframe  frameborder="0" allowfullscreen style="width: 100%;height: 100%;padding:10px" 
					    							src="https://www.youtube.com/embed/jKLJktTDK3U?rel=0&autoplay=1"></iframe>
					    						</div>
					    					</div>
					    				</div>
					    			</div>
					    			<!-- Headings -->

					    			<!-- Clear Space -->
					    			<div class="container clearfix" style="height: 50px"></div>
					    			<!-- Clear Space -->


					    			<div class="container" style="width:100%;">
					    				<?php
					    				include "animations/lines-1.svg";
					    				?>
					    			</div>

					    			<!-- Dates -->
					    			<div class="container">
						    			<script type="text/javascript">
						    			/*
						    				var lineDrawing = anime({
											  	targets: '#blockDates .lines path',
											  	strokeDashoffset: [anime.setDashoffset, 0],
											  	easing: 'easeInOutSine',
											  	duration: 1500,
											  	delay: function(el, i) { return i * 50 },
											  	direction: 'alternate',
											  	loop: true
											});*/
						    			</script>
						    			<!--
						    		</div>
					    			<div class="container">-->
					    				<div class="row">
						    				<div class="col-lg-6 col-md-6 col-sm-0 col-xs-0 hidden-md-down">
						    					<div id="blockDates" style="position:relative;">
						    						<?php
						    						include "img/date-title.svg";
						    						?>
						    					</div>
						    				</div>
						    				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						    					<div class="row headingChild float-right">16
						    						<sup style="margin-top: 20px;">Th</sup> - 18
						    						<sup style="margin-top: 20px;">Th</sup> Nov'18
						    					</div>
						    				</div>
					    				</div>
					    				<br>
					    				<div class="row" style="flex-wrap: nowrap;">
					    					<div class="col-md-2 col-sm-2 col-xs-2 clearfix"></div>
					    					<div class="col-md-2 col-sm-2 col-xs-2">
					    						<div class="row cd_head">Days</div>
					    						<div id="cd_days" class="countdown"></div>
					    					</div>
					    					<div class="col-md-2  col-sm-2 col-xs-2">
					    						<div class="row cd_head">Hours</div>
					    						<div id="cd_hrs" class="col-md-3 countdown"></div>
					    					</div>
					    					<div class="col-md-2  col-sm-2 col-xs-2">
					    						<div class="row cd_head">Minutes</div>
					    						<div id="cd_mins" class="col-md-3 countdown"></div>
					    					</div>
					    					<div class="col-md-2  col-sm-2 col-xs-2">
					    						<div class="row cd_head">Seconds</div>
					    						<div id="cd_sec" class="col-md-3 countdown"></div>
					    					</div>
					    						<div class="col-md-2 col-sm-2 col-xs-2 clearfix"></div>
					    				</div>
					    				<hr class="section-seperator-right" data--10-bottom="width:0%" data-center-top="width:50%">
					    			</div>
					    			<!-- Dates -->

					    			<!-- Clear Space -->
					    			<div class="container clearfix" style="height: 50px"></div>
					    			<!-- Clear Space -->

					    			<div class="container">
					    				<?php
					    				include "animations/lines-2.svg";
					    				?>
					    			</div>

					    			<!-- About IRIS -->
					    			<?php
					    				include "pages/about.html";
					    			?>
									<!-- About IRIS -->

									<!-- Clear Space -->
					    			<div class="container clearfix" style="height: 20px"></div>
					    			<!-- Clear Space -->

					    			<div class="container">
					    				<?php
					    				include "animations/lines-3.svg";
					    				?>
					    			</div>

					    			<!-- Pro Shows -->
					    			<?php
					    				include "pages/pronites.html";
					    			?>
					    			<!-- Pro Shows -->

									<!-- Clear Space -->
					    			<div class="container clearfix" style="height: 20px"></div>
					    			<!-- Clear Space -->

					    			<div class="container">
					    				<?php
					    				include "animations/lines-4.svg";
					    				?>
					    			</div>

					    			<!-- Envision -->
					    			<?php
					    				include "pages/envision.html";
					    			?>
					    			<!-- Envision -->

					    			<!-- Clear Space -->
					    			<div class="container clearfix" style="height: 20px"></div>
					    			<!-- Clear Space -->
					    			
					    			<div class="container">
					    				<?php
					    				include "animations/lines-5.svg";
					    				?>
					    			</div>

					    			<!-- Events -->
					    			<?php
					    				include "pages/events.html";
					    			?>
					    			<!-- Events -->

					    			<!-- Clear Space -->
					    			<div class="container clearfix" style="height: 20px"></div>
					    			<!-- Clear Space -->

					    			<div class="container">
					    				<?php
					    				include "animations/lines-6.svg";
					    				?>
					    			</div>

					    			<!-- Sports -->
					    			<?php
					    				include "pages/sports.html";
					    			?>
					    			<!-- Sports -->

					    			<!-- Clear Space -->
					    			<div class="container clearfix" style="height: 20px"></div>
					    			<!-- Clear Space -->

					    			<div class="container">
					    				<?php
					    				include "animations/lines-7.svg";
					    				?>
					    			</div>

					    			<!-- Past Records -->
					    			<!-- Gallery -->
					    			<!-- Sponsors -->
					    			<?php
					    				include "pages/sponsors.html";
					    			?>
					    			<!-- Sponsors -->

					    			<!-- Clear Space -->
					    			<div class="container clearfix" style="height: 20px"></div>
					    			<!-- Clear Space -->

					    			<div class="container">
					    				<?php
					    				include "animations/lines-8.svg";
					    				?>
					    			</div>

					    			<!-- Register -->
					    			<!--
					    			<?php
					    				//include "pages/register.html";
					    			?>
					    			-->
					    			<!-- Register -->

					    			<!-- Gallery -->
										<?php
					    				include "pages/gallery.html";
										?>  
					    			<!-- Gallery -->

					    			<!-- Clear Space -->
					    			<div class="container clearfix" style="height: 20px"></div>
					    			<!-- Clear Space -->

					    			<div class="container">
					    				<?php
					    				include "animations/lines-9.svg";
					    				?>
					    			</div>

					    			<!-- Contact Us -->
					    			<?php
					    				include "pages/contactus.html";
					    			?>
									<!-- Contact Us -->

									<!-- Clear Space -->
					    			<div class="container clearfix" style="height: 20px"></div>
					    			<!-- Clear Space -->

					    			<div class="container">
					    				<?php
					    				include "animations/lines-10.svg";
					    				?>
					    			</div>

					    		</div>
					    		<!-- Page Contents -->

					    		<!-- View Event / Sport Details -->
								<?php
									include "pages/eventdetails.html";
								?>
								<!-- View Event / Sport Details -->
	

					 	 	</div>
						</div>
					</div>
				</div>
			</section>
			<script>
				if( !(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)))
 				document.write('<script type="text/javascript" src="lib/skrollr.min.js"><\/script>');
			</script>
			<!--<script src="lib/skrollr.min.js"></script>-->
			<!-- Contents -->

		</div>
	</body>

	<script>
	/*
		var s = skrollr.init({
			smoothScrolling: true,
        	smoothScrollingDuration: 500
		});*/
	</script>

</html>