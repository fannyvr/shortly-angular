angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $window, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    $scope.loading = true;
    Links.addLink( $scope.link ).then(function(res){
      if(res.status === 200){
        onSuccess(res)      
      }
      else {
        onError(res)
      }
    });

    function onSuccess(){
      $scope.loading = false;
      $location.path('/')
    }
    function onError(){
      console.log('There is an Error')
    }
  };
});