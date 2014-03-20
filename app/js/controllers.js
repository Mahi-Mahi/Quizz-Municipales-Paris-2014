define(['angular', 'services'], function(angular) {
	'use strict';

	/* Controllers */

	return angular.module('myApp.controllers', ['myApp.services'])
	// Sample controller where service is being used
	.controller('homeCtrl', ['$scope', 'version',
		function($scope, version) {
			$scope.scopedAppVersion = version;
		}
	])
		.controller('resultsCtrl', ['$scope', '$rootScope', '$location',
			function($scope, $rootScope, $location) {
				if (!$rootScope.results) {
					$location.path('/');
				}
				if ($rootScope.results.nkm > $rootScope.results.ah) {
					// NKM
					$scope.title = "Vous partagez plutôt les idées de Nathalie Kosciuko-Morizet";
					$scope.slug = ['nkm'];
				} else {
					if ($rootScope.results.nkm < $rootScope.results.ah) {
						// AH
						$scope.title = "Vous partagez plutôt les idées de Nathalie Kosciuko-Morizet";
						$scope.slug = ['nkm'];
					} else {
						// draw
						$scope.title = "Vous partagez à égalité les idées des deux candidates";
						$scope.slug = ['ah', 'nkm'];
					}
				}
			}
		])
	// More involved example where controller is required from an external file
	.controller('quizzCtrl', ['$scope', '$injector',
		function($scope, $injector) {
			require(['controllers/quizzCtrl'], function(quizzCtrl) {
				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
				// Furthermore we need to pass on the $scope as it's unique to this controller
				$injector.invoke(quizzCtrl, this, {
					'$scope': $scope
				});
			});
		}
	]);
});