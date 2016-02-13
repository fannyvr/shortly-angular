angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $window, $location, Links, $http) {
  // ****Your code here****
  $scope.link = {};
  $scope.addLink = function() {
    Links.addLink( $scope.link ).then(function(res){
      if(res.status === 200){
        onSuccess(res)      
      }
      else {
        onError(res)
      }
    });

    function onSuccess(){
      console.log('in onSuccess')
      $window.location.href = $window.location.origin + "/#/links";
    }
    function onError(){
      console.log('in onError')
    }
  };
});