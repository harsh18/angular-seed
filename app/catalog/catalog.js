'use strict';

angular.module("movieDB.catalog", []).controller('catalogContrl', ['$scope', '$http', function($scope, $http){
		$http.get('assets/json/movies.json').success(function(data){
			$scope.movieList = data;
		})
	}]);