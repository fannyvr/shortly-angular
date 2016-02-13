angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // ****Your code here****
  angular.extend($scope, Links)
  $scope.data = {};
  $scope.getLinks().then(function(resp){
  	$scope.data.links = resp.data
  });
});
