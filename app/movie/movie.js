'use strict'

angular.module('movieDB.movie', ['ui.bootstrap']).
	controller('movieContrl', ['$scope', 'movieApiService', '$filter', '$routeParams', function($scope, movieApiService, $filter, $routeParams){
		$scope.movieId = $routeParams.movieID;
		movieApiService.getMovies().success(function(data){
			$scope.movie = $filter('filter')(data, {id: parseInt($scope.movieId)})[0];
			console.log($scope.movie);
		})
	}]);
