angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
  	Links.getLinks().then(function(links){
  		$scope.data.links = links;
  	})
  	.catch(function(err){
  		console.error(err)
  	})
  }
  $scope.getLinks();

  $scope.name = "LinksController"
});
