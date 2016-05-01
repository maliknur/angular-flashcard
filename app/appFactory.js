/**
 * Created by malik_nurmatov on 5/1/16.
 */
'use strict';
(function(){
    angular.module('animal')
        .factory('animalFactory', animalFactory);
    animalFactory.$inject = ['$http'];

    function animalFactory($http) {
        return {
            getData : function(){
                var dataResult = $http.get('data.json').success(function(data){
                    return data;
                });
                return dataResult;
            }
        }

    }
})();