angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // ****Your code here****
  $scope.link = {url: 'https://www.google.com/'};
  $scope.addLink = Links.addLink;
  $scope.addLink($scope.link).then(function(link){
    console.log(link);
  });
});
