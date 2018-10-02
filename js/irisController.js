var IrisApp=angular.module('IrisApp',['ngAnimate']);

IrisApp.controller('irisController',irisController);
function irisController($scope, $http, $sce){

	//constants
	const DEFAULT_EVENT_LOGO = "img/events/logo-def.svg";

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
	}

	init();

	$scope.focusOver="";
	$scope.displayText="";

	$scope.viewEventDetails=function(object){
		//console.log(name);
		$scope.eventDetails=object;
		if($scope.eventDetails.about!=undefined && $scope.eventDetails.about!=""){
			$('#eventContacts').css({'display':'none'});
			$scope.displayText=$scope.eventDetails.about;
		}else if($scope.eventDetails.format!=undefined && $scope.eventDetails.format!=""){
			$('#eventContacts').css({'display':'none'});
			$scope.displayText=$scope.eventDetails.format;
		}else if($scope.eventDetails.rules!=undefined && $scope.eventDetails.rules!=""){
			$('#eventContacts').css({'display':'none'});
			$scope.displayText=$scope.eventDetails.rules;
		}else{
			$('#eventContacts').fadeIn(500);
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
		if(sectionName=='about'){
			$('#eventContacts').css({'display':'none'});
			$scope.displayText=$scope.eventDetails.about;
			$('#detailsBox').fadeIn(0);
		} else if(sectionName=='format'){
			$('#eventContacts').css({'display':'none'});
			$scope.displayText=$scope.eventDetails.format;
			$('#detailsBox').fadeIn(0);
		} else if(sectionName=='rules'){
			$('#eventContacts').css({'display':'none'});
			$scope.displayText=$scope.eventDetails.rules;
			$('#detailsBox').fadeIn(0);
		} else if(sectionName=='contact'){
			$('#eventContacts').fadeIn(0);
			$scope.displayText="";
			$('#detailsBox').fadeIn(0);
		}
	}
}