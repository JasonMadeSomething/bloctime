(function() {
    function timer($interval) {
        
        return {
            templateUrl: '/templates/directives/timer.html',
            replace: true,
            restrict: 'E',
            scope: { },
            link: function(scope, element, attributes) {
                
                scope.time = 1500;
                
                var timer = null;
                
                
                scope.buttonText = function() {
                    if(timer === null){
                        return "Start Session";
                    } else {
                        return "Stop Session";
                    }
                }
                
                scope.toggleTimer = function() {
                    if (timer === null) {
                        updateTime();
                        timer = $interval(updateTime, 1000);
                    } else {
                        $interval.cancel(timer);
                        timer = null;
                        scope.time = 1500;
                    }
                }
                var updateTime = function() {
                    scope.time -= 1;
                };
                
            }
        };
    }
    
    angular
        .module('bloctime')
        .directive('timer', ['$interval', timer]);
})();