'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$q', '$http', function ($q, $http) {

    const a = ($http, $q) => ({
      getData: () => {
        var deferred = $q.defer();
        $http({method: 'GET', url: 'test.json'}).then(function success(response) {
            deferred.resolve(response.data.question);
          }, function error(response) {
            deferred.reject(response.status);
          }
        );
        return deferred.promise;
      }
    })

    const s = a($http, $q);
    s.getData()
  }]);
