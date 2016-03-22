(function() {
    function Tasks($firebaseArray) {
        var firebaseRef = new Firebase("https://blistering-torch-9616.firebaseio.com");
        
        var tasks = $firebaseArray(firebaseRef);
        
        return {
            all: tasks
            
        };
    }
    
    angular
        .module('bloctime')
        .factory('Tasks', ['$firebaseArray', Tasks]);
})();