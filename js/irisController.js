var IrisApp=angular.module('IrisApp',[]);

IrisApp.controller('irisController',irisController);
function irisController($scope, $http){

	//init
	$scope.sponsors;

	var getSponsors=function(){
		$http.get("php/getSponsors.php")
   			.then(function (response) {
   				//console.log(response);
   				$scope.sponsors = response.data;
   				console.log($scope.sponsors);
   			});
	}

	var init=function(){
		getSponsors();
		
	}

	init();

	$scope.viewEventDetails=function(name){
		console.log(name);
		$('#eventDetails').delay(400).fadeIn(500).addClass("animated fadeIn");
		$('#eventDetails').delay(400).fadeIn(500).removeClass("animated fadeIn");
	}

	$scope.register=function(name){
		console.log('register '+name);
	}

	$scope.close=function(name){
		console.log("a");
		$('#'+name).delay(400).fadeOut(500).addClass("animated zoomOut");
		$('#'+name).delay(400).fadeOut(500).removeClass("animated zoomOut");
	}
}