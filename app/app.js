'use strict';

angular.module("movieDB", [
	"ngRoute",
	"movieDB.catalog", 
	"movieDB.movie",
	"movieDB.paginate-filter"
	])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'catalog/catalog.html', 
				controller: 'catalogContrl'
			}).
			when('/movie/:movieID', {
				templateUrl: 'movie/movie.html', 
				controller: 'movieContrl'
			}).
			otherwise({redirectTo : '/'});
	}]);