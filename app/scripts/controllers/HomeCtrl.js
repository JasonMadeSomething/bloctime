(function() {
    function HomeCtrl($scope, Tasks) {
        $scope.allTasks = Tasks.all;
        
        $scope.addTask = function() {
            $scope.allTasks.$add({name: $scope.newTask, created_at: Firebase.ServerValue.TIMESTAMP});
            $scope.newTask = "";
        };
        
        $scope.openModal = function(){
            $("#taskModal").openModal();
        };
    }
    
    angular
        .module('bloctime')
        .controller('HomeCtrl', ['$scope', 'Tasks', HomeCtrl]);
})();