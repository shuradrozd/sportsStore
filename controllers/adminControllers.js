angular.module("sportsStoreAdmin")
.constant("authUrl", "http://localhost:5500/users/login")
.controller("authCtrl", function($scope, $http, $location, authUrl) {

	$scope.authenticate = function (user, pass) {
		$http.post(authUrl, {
			username: user,
			password: pass
		}, {
			withCredentials: true
		})

		.then(function (response) {
			$location.path("/main");
		})
		
		.catch(function(response, status) {
		$scope.authenticationError = response.status;
    	
  		});   

  	}
})

.controller("mainCtrl", function($scope) {
	$scope.screens = ["Products", "Orders"];

	$scope.current = $scope.screens[0];

	$scope.setScreen = function(index) {
		$scope.current = $scope.screens[index];
	}

	$scope.getScreen = function() {
		return $scope.current == "Products" ? "/views/adminProducts.html" : "/views/adminOrders.html";
	};
});