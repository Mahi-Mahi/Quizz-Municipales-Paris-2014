require.config({
	paths: {
		angular: '../../vendor/angular/angular',
		angularRoute: '../../vendor/angular-route/angular-route',
		angularMocks: '../../vendor/angular-mocks/angular-mocks',
		text: '../../vendor/requirejs-text/text'
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps: ['angular'],
			'exports': 'angular.mock'
		}
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});