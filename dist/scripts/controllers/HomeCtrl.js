(function() {
    function HomeCtrl($scope, Tasks) {
        $scope.allTasks = Tasks.all;
        
        $scope.addTask = function() {
            $scope.allTasks.$add($scope.newTask);
            $scope.newTask = "";
        };
    }
    
    angular
        .module('bloctime')
        .controller('HomeCtrl', ['$scope', 'Tasks', HomeCtrl]);
})();