'use strict';

angular.module("movieDB.catalog", ['ui.bootstrap']).controller('catalogContrl', ['$scope', '$http', function($scope, $http){	
	$scope.currentPage = 1;
	$scope.itemsPerPage = 12;
	$http.get('assets/json/movies.json').success(function(data){
		$scope.movieList = data;
		$scope.totalItems= $scope.movieList.length;
	})
}]);