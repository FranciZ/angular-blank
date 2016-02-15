myApp.controller('MainCtrl', function($scope){
    
    $scope.navButtons = [
        {
            name    : 'Dashboard',
            state   : 'dashboard'
        },
        {
            name    : 'Projects',
            state   : 'projects'
        },
        {
            name    : 'Articles',
            state   : 'articles'
        }
    ];
    
});
