var IrisApp=angular.module('IrisApp',['ngAnimate']);

IrisApp.controller('irisController',irisController);
function irisController($scope, $http, $sce){

	//constants
	const DEFAULT_EVENT_LOGO = "img/events/logo-def.svg";

	//For Mobile
	$scope.mobile=false;
	if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
  		$scope.mobile=true;
	}

	//init
	$scope.sponsors;
	$scope.flagshipEvents;
	$scope.culturalEvents;
	$scope.managmentEvents;
	$scope.sports;

	var getSponsors=function(){
		//console.log("a");
		$http.get("php/getSponsors.php")
   			.then(function (response) {
   				$scope.sponsors = response.data;
   			});
	}

	/*
	Event Type: 1-> Flagship
				2-> Managment
				3-> Cultural
	*/
	var getFlagshipEvents=function(){
		$http.get("php/getFlagshipEvents.php")
   			.then(function (response) {
   				$scope.flagshipEvents = response.data;
   				transformToHTML($scope.flagshipEvents);
   				getBackgrounds($scope.flagshipEvents);
   			});
	}

	var getCulturalEvents=function(){
		$http.get("php/getCulturalEvents.php")
   			.then(function (response) {
   				$scope.culturalEvents = response.data;
   				transformToHTML($scope.culturalEvents);
   				getBackgrounds($scope.culturalEvents);
   			});
	}

	var getManagmentEvents=function(){
		$http.get("php/getManagmentEvents.php")
   			.then(function (response) {
   				//console.log(response);
   				$scope.managmentEvents = response.data;
   				transformToHTML($scope.managmentEvents);
   				getBackgrounds($scope.managmentEvents);
   			});
	}

	var getSports=function(){
		$http.get("php/getSports.php")
   			.then(function (response) {
   				$scope.sports = response.data;
   				transformToHTML($scope.sports);
   				getBackgrounds($scope.sports);
   			});
	}	

	var getEnvisionSpeakers=function(){
		$http.get("php/getEnvisionSpeakers.php")
   			.then(function (response) {
   				$scope.envisionSpeakerDetails = response.data;
   			});
	}

	var transformToHTML=function(array){
		for(var i=0;i<array.length;i++){
			array[i].about=$sce.trustAsHtml(array[i].about);
   			array[i].format=$sce.trustAsHtml(array[i].format);
   			array[i].rules=$sce.trustAsHtml(array[i].rules);
   		}
	}

	var getBackgrounds=function(array){
		for(var i=0;i<array.length;i++){
			array[i].bg=array[i].background.split(',');
   		}
	}

	var init=function(){
		getSponsors();
		getFlagshipEvents();
		getCulturalEvents();
		getManagmentEvents();
		getSports();
		getEnvisionSpeakers();
	}

	init();

	$scope.focusOver="";
	$scope.displayText="";

	$scope.viewEventDetails=function(object){
		//console.log(name);
		$scope.eventDetails=object;
		if($scope.eventDetails.about!=undefined && $scope.eventDetails.about!=""){
			$('#eventContactsSection').css({'display':'none'});
			$('#eventAbout').addClass('eventNavActive');
			$scope.displayText=$scope.eventDetails.about;
		}else if($scope.eventDetails.format!=undefined && $scope.eventDetails.format!=""){
			$('#eventContactsSection').css({'display':'none'});
			$('#eventFormat').addClass('eventNavActive');
			$scope.displayText=$scope.eventDetails.format;
		}else if($scope.eventDetails.rules!=undefined && $scope.eventDetails.rules!=""){
			$('#eventContactsSection').css({'display':'none'});
			$('#eventRules').addClass('eventNavActive');
			$scope.displayText=$scope.eventDetails.rules;
		}else{
			$('#eventContactsSection').fadeIn(500);
			$('#eventContacts').addClass('eventNavActive');
		}
		$('#eventDetails').fadeIn(500).addClass("animated fadeIn");
		$('#eventDetails').delay(400).removeClass("animated fadeIn");
	}

	$scope.register=function(name){
		console.log('register '+name);
	}

	$scope.close=function(name){
		//console.log("a");
		$('#'+name).fadeOut(500).addClass("animated zoomOut");
		$('#'+name).fadeOut(500).removeClass("animated zoomOut");
		$scope.displayText="";
	}

	$scope.changeEventDetailContent=function(sectionName){
		$('#detailsBox').fadeOut(0);
		$('#eventAbout').removeClass('eventNavActive');
		$('#eventFormat').removeClass('eventNavActive');
		$('#eventRules').removeClass('eventNavActive');
		$('#eventContacts').removeClass('eventNavActive');
		if(sectionName=='about'){
			$('#eventContactsSection').css({'display':'none'});
			$('#eventAbout').addClass('eventNavActive');
			$scope.displayText=$scope.eventDetails.about;
			$('#detailsBox').fadeIn(0);
		} else if(sectionName=='format'){
			$('#eventContactsSection').css({'display':'none'});
			$('#eventFormat').addClass('eventNavActive');
			$scope.displayText=$scope.eventDetails.format;
			$('#detailsBox').fadeIn(0);
		} else if(sectionName=='rules'){
			$('#eventContactsSection').css({'display':'none'});
			$('#eventRules').addClass('eventNavActive');
			$scope.displayText=$scope.eventDetails.rules;
			$('#detailsBox').fadeIn(0);
		} else if(sectionName=='contact'){
			$('#eventContactsSection').fadeIn(0);
			$('#eventContacts').addClass('eventNavActive');
			$scope.displayText="";
			$('#detailsBox').fadeIn(0);
		}
	}
}