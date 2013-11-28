var questy = angular.module('questy', [ 'ngRoute', 'ngCookies' ]);

questy.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/qform', {
		templateUrl : 'qform.html'
	}).when('/login', {
		templateUrl : 'login.html'
	}).otherwise({
		redirectTo : '/qform'
	});

} ]);


questy.service('loginService', function($http, $location, $cookieStore) {
	var login = function(user) {
		$http.post('login', user).success(function(res) {
			if (res.loggedIn) {
				$cookieStore.put('sessionToken', res.token);
			}
		});
	};
	var isLoggedIn = function() {
		$http.get('/login/status').success(function(status) {
			if (!status) {
				$location.path('/login');
			}
		});
	};
	// the user is stuck at '/login' until they are logged in
	$rootScope.$on('$locationChangeStart', function(current, next) {
		if (!isLoggedIn && next !== '/login') {
			$location('/login');
		}
	});

	return {
		login : login,
		isLoggedIn : isLoggedIn
	};
});

questy.controller('QForm', function($scope, $http) {
	$scope.submit = function() {
		$http.post('/login', {
			'username' : 'apf',
			'password' : 'apf'
		}).success(function(data, status, headers, config) {
			alert(data);
		});
	};
});
