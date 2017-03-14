angular.module("sportsStore")
.constant("dataUrl", "http://localhost:5500/products")
.constant("orderUrl", "http://localhost:5500/orders")
.controller("sportsStoreCtrl", function($scope, $http, $location, dataUrl, orderUrl, cart) {
	
	$scope.data = {};

	$http.get(dataUrl)
	.then(function(response) {
		$scope.data.products = response.data;
	})
	.catch(function(response, status) {
		$scope.data.error = response.status;
    console.error('Data error', response.status, response.data);
  	});

	$scope.sendOrder = function (shippingDetails) {
		var order = angular.copy(shippingDetails);
		order.products = cart.getProducts();
		$http
		.post(orderUrl, order).then(function (response) {
				$scope.data.orderId = responce.data.id;
				cart.getProducts().length = 0;
		})
		
		.catch(function (response, status) {
		$scope.data.orderError = response.status;
		console.error('Data error', response.status, response.data);
		})
		
		.finally(function () {
			$location.path("/complete");
		});
	}
	
});