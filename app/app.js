'use strict';

angular.module("movieDB", [
	"ngRoute",
	"movieDB.catalog", 
	"movieDB.paginate-filter"
	])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'catalog/catalog.html', 
				controller: 'catalogContrl'
			}).
			otherwise({redirectTo : '/'});
	}]);