'use strict';

angular.module("todoApp.controller", []).controller("todoAppController", ["$scope", function($scope){

	$scope.newTask = "";
	$scope.newTaskList = [
		{'description':'Need to attend session of mongodb', 'done':false},
		{'description':'Need to complete angular session today', 'done':false},
		{'description':'Need to see javascript best practices', 'done':false}
	];
	$scope.addNewTask = function(){
		$scope.newTaskList.push({'description': $scope.newTask, 'done':false});
		$scope.newTask = "";
	}
	$scope.removeTask = function(node){
		$scope.newTaskList.splice(node, 1);
	}
	
}]);
