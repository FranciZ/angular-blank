myApp.controller('ArticlesCtrl', function($scope, projectsService){
    
    $scope.projects = projectsService.projects;
    
});