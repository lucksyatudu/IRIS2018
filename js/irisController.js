var IrisApp=angular.module('IrisApp',[]);

IrisApp.controller('irisController',irisController);
function irisController($scope, $http){
	//console.log("angular loaded");

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