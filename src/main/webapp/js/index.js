var questy = angular.module('questy', [ 'ngRoute', 'ngCookies' ]);

questy.config([ '$routeProvider', function($routeProvider, loginService) {

	return $routeProvider.when('/qform', {
		templateUrl : 'qform.html'
	}).when('/login', {
		templateUrl : 'login.html'
	}).when('/home', {
		templateUrl : 'home.html'
	}).otherwise({
		redirectTo : '/home'
	});

} ]);

questy.service('loginService', function($http, $location, $cookieStore,
		$rootScope) {

	var isLoggedIn = false;

	// the user is stuck at '/login' until they are logged in
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if (!isLoggedIn && next.redirectTo !== '/login'
				&& next.originalPath !== '/login') {
			$location.path('/login');
		}
	});

	var login = function(username, password, callback) {
		if (username && password) {
			$http.post('/login', {
				username : username,
				password : password
			}).success(function(data, status, headers, config) {
				isLoggedIn = data.known;
				callback(data.known);
			});
		}
		return isLoggedIn;
	};

	var logout = function() {
		isLoggedIn = false;
		$location.path('/login');
	};
	return {
		login : login,
		logout : logout
	};
});

questy.controller('LoginController', function($scope, $location, loginService) {
	$scope.user = {
		username : null,
		password : null,
		isLoggedIn : false
	};
	$scope.login = function() {
		loginService.login($scope.user.username, $scope.user.password,
				function(login) {
					$scope.user.isLoggedIn = login;
					if (login)
						$location.path('/qform');
				});
	};

	$scope.logout = function() {
		loginService.logout();
		$scope.isLoggedIn = false;
	};

});

questy.controller('QForm', function($scope, $http) {
	$scope.submit = function() {

	};
});
