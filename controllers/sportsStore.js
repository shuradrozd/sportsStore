angular.module("sportsStore").controller("sportsStoreCtrl", function($scope) {
	$scope.data = {
		products: [
		{ name: "Product1", description: "A product", category: "Category #1", price: 100 },
		{ name: "Product2", description: "A product", category: "Category #1", price: 110 },
		{ name: "Product3", description: "A product", category: "Category #2", price: 210 },
		{ name: "Product4", description: "A product", category: "Category #3", price: 202 }]
	};

	$scope.selectCategory = function(item) {
		$scope.select = item;
	};

});