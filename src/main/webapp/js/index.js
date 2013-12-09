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
		if (!isLoggedIn && next.redirectTo !== '/login' && next.originalPath !== '/login') {
			$location.path('/login');
		}
	});
	return {
		isLoggedIn : isLoggedIn
	};
});

questy.controller('LoginController', function($scope, $http, $rootScope,
		$location, loginService) {
	$scope.username = 'apf';
	$scope.password = 'apf';
	$scope.isLoggedIn = false;
	$scope.login = function() {
		$http.post('/login', {
			username : 'apf',
			password : 'apf'
		}).success(function(data, status, headers, config) {
			$scope.isLoggedIn = data.known;
			loginService.isLoggedIn = data.known;
			$location.path('/qform');
		});
	};
});

questy.controller('QForm', function($scope, $http) {
	$scope.submit = function() {

	};
});
