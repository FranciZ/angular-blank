var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){
   
    $urlRouterProvider.otherwise("/dashboard");
    
    $stateProvider.state('dashboard', {
        url         : '/dashboard',
        templateUrl : 'views/dashboard/index.html',
        controller  : 'DashboardCtrl'
    });
    
    $stateProvider.state('articles', {
        url         : '/articles',
        templateUrl : 'views/articles/index.html',
        controller  : 'ArticlesCtrl'
    });
    
    $stateProvider.state('projects',{
        url         : '/projects',
        templateUrl : 'views/projects/index.html',
        controller  : 'ProjectsCtrl'
    });
    
});