var questy = angular.module('questy', [ 'ngRoute', 'ngCookies' ]);

questy.config([ '$routeProvider', function($routeProvider, loginService) {

	return $routeProvider.when('/qform', {
		templateUrl : 'views/qform.html'
	}).otherwise({
		redirectTo : '/qform'
	});

} ]);

questy.service('loginService', function($http, $location, $cookieStore,
		$rootScope) {

	// the user is stuck at '/login' until they are logged in
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if (!isLoggedIn && next.redirectTo !== '/login'
				&& next.originalPath !== '/login') {
			// redirect login page
		}
	});

	var isLoggedIn = function() {

	}

	var logout = function() {

	};

	return {
		isLoggedIn : isLoggedIn,
		logout : logout
	};
});

questy.controller('LoginController', function($scope, $location, loginService) {
	$scope.logout = function() {
		loginService.logout();
		$scope.isLoggedIn = false;
	};

});

questy.controller('QForm', function($scope, $http) {
	$scope.submit = function() {

	};
});
