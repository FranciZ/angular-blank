myApp.controller('MainCtrl', function($scope){
    
    // TWO WAY BINDING
    $scope.users = [];
    $scope.user = {};
    
    $scope.addUser = function(){
        
        var newUser = {
            name    : $scope.user.name,
            surname : $scope.user.surname
        };
        
        $scope.user.name = '';
        $scope.user.surname = '';
        
        $scope.users.push(newUser);
        
    };
    
    $scope.removeSelected = function(){
      
        // remove multiple items from the array 
        var i = $scope.users.length;
        while (i--) {
            
            var user = $scope.users[i];
            
            if(user.selected === true){
                $scope.users.splice(i,1);
            }
            
        }
        
    };
    
    $scope.removeUser = function(i, user){
      
        // remove item from array
        $scope.users.splice(i,1);
        
    };
    
});
