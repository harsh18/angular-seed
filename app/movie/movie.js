'use strict'

angular.module('movieDB.movie', ['ui.bootstrap']).
	controller('movieContrl', ['$scope', '$http', '$filter', '$routeParams', function($scope, $http, $filter, $routeParams){
		$scope.movieId = $routeParams.movieID;
		$http.get('assets/json/movies.json').success(function(data){
			$scope.movie = $filter('filter')(data, {id: parseInt($scope.movieId)})[0];
			console.log($scope.movie);
		})
	}]);
