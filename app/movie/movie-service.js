'use strict'

angular.module('movieDb.movieService', []).
	factory('movieApiService', ['$http', function($http){
		var movieApi = {};

		movieApi.getMovies = function(){
			return $http.get('assets/json/movies.json');
		}

		return movieApi;
	}])