'use strict';

angular.module("movieDB.catalog", ['ui.bootstrap']).controller('catalogContrl', ['$scope', 'movieApiService', function($scope, movieApiService){	
	$scope.currentPage = 1;
	$scope.itemsPerPage = 12;
	movieApiService.getMovies().success(function(data){
		$scope.movieList = data;
		$scope.totalItems= $scope.movieList.length;
	})
}]);