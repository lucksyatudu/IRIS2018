var IrisApp=angular.module('IrisApp',[]);

IrisApp.controller('eventController',eventController);
function eventController($scope, $http){
	//console.log("angular loaded");

	$scope.viewEventDetails=function(name){
		console.log(name);
		$('#eventDetails').delay(400).fadeIn(500);
	}

	$scope.register=function(name){
		console.log('register '+name);
	}

	$scope.close=function(name){
		$('#'+name).fadeOut(500);
	}
}