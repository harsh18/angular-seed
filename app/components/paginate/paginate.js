'use strict';

angular.module('movieDB.paginate-filter',[])
	.filter('paginate', function(){
		return function(arr, currentPage, pageSize){
			console.log(currentPage);
			console.log(pageSize);
			console.log('index at which node start deleting', (currentPage-1)*pageSize);
			console.log('integer indicating the numbr of old pages to delete', currentPage*pageSize);
			try{
				return arr.slice((currentPage-1)*pageSize, currentPage*pageSize);
			}catch(err){
				return arr;
			}
			
		}
	})
