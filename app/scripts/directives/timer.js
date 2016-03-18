(function() {
    function timer($interval, TIMER_STATES) {
        
        return {
            templateUrl: '/templates/directives/timer.html',
            replace: true,
            restrict: 'E',
            scope: { },
            link: function(scope, element, attributes) {
                                
                scope.time = TIMER_STATES.WORK_TIME;
                
                var timer = null;
                
                var completedWorkSessions = 0;
                
                scope.buttonText = function() {
                    if(timer === null){
                        return "Start";
                    } else {
                        return "Stop";
                    }
                }
                
                scope.toggleTimer = function() {
                    if (timer === null) {
                        updateTime();
                        timer = $interval(updateTime, 1000);
                    } else {
                        $interval.cancel(timer);
                        timer = null;
                        resetTimer();
                    }
                }
                
                var onBreak = false;
                                
                var updateTime = function() {
                    scope.time -= 1;
                    if (scope.time === 0){
                        changeBreakStatus();
                        if(onBreak) {
                            completedWorkSessions += 1;
                        }
                        scope.toggleTimer();
                    }
                };
                
                var changeBreakStatus = function() {
                    onBreak = !(onBreak);
                };
                    
                var resetTimer = function() {
                    if(onBreak){
                        if (completedWorkSessions === 4){
                            scope.time = TIMER_STATES.LONG_BREAK_TIME;
                            completedWorkSessions = 0;
                        } else{
                            scope.time = TIMER_STATES.BREAK_TIME;
                        }
                    }else{
                        scope.time = TIMER_STATES.WORK_TIME;
                    }
                };
            }
        };
    }
    
    angular
        .module('bloctime')
        .constant('TIMER_STATES', {
            "BREAK_TIME": 300,
            "WORK_TIME": 1500,
            "LONG_BREAK_TIME": 1800
    })
        .directive('timer', ['$interval', 'TIMER_STATES', timer]);
})();