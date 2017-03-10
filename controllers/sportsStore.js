angular.module("sportsStore")
.constant("dataUrl", "http://localhost:5500/products")
.controller("sportsStoreCtrl", function($scope, $http, dataUrl) {
	$scope.data = {};

	$http.get(dataUrl)
	.then(function(response) {
		$scope.data.products = response.data;
	})
	.catch(function(response, status) {
		$scope.data.error = response.status;
    console.error('Data error', response.status, response.data);
  	});
	
});