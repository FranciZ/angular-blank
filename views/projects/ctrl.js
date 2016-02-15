myApp.controller('ProjectsCtrl', function($scope, projectsService){
   
    console.log(projectsService.projects);
    
    $scope.projects = projectsService.projects;
    
    $scope.deleteProject = function(project){
      
        for(var i=0;i<$scope.projects.length;i++){
            
            if($scope.projects[i].name === project.name){
                $scope.projects.splice(i,1);
            }
            
        }
        
    };
    
});