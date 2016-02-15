myApp.directive('sideNav', function(){
   
    return {
        // only allow attributes and elements
        restrict:'AE',
        // replace element
        replace:true,
        // html template that defines this directive
        templateUrl:'directives/side-nav.html',
        scope:{
              buttons:'='
        },
        link:function(scope, element, attrs){
            
            $(window).on('resize', function(){
                
                wHeight = $(window).height();
                element.height(wHeight);
                
            });
            
            var wHeight = $(window).height();
            
            element.height(wHeight);
               
        }
    }
    
});