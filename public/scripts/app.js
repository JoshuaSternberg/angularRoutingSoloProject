var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/characterOne', {
            templateUrl: '/views/templates/characterOne.html',
            controller: 'CharacterOne'
        })
        .when('/characterTwo', {
            templateUrl: '/views/templates/characterTwo.html',
            controller: 'CharacterTwo'
        })
        .when('/characterThree', {
            templateUrl: '/views/templates/characterThree.html',
            controller: 'CharacterThree'
         })
        .otherwise({
            redirectTo: 'characterOne'
        });
}]);