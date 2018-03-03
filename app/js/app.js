'use strict';
/* http://docs.angularjs.org/#!angular.service */

// Declare app level module which depends on filters, and services
angular.module('myApp',['myApp.controllers','ui.grid']);

angular.module('myApp').run(function($rootScope){
	$rootScope.title='Famous Books';
	$rootScope.name="Root Scope"
});
