var app = angular.module('olympicApp', []);

app.controller('MainController', function($scope, $http){
  $scope.athletes = [];

  var configObject = {
    method: "GET",
    url: 'olympics/all'
  };

  var randObject = {
    method: "GET",
    url: 'olympics/randomAthletes'
  };

  function handleSuccess(response){
    $scope.athletes = response.data;
    console.log('Success!!!', response);
  };

  function handleFailure(response){
    console.log('Failure', response);
  };

  function showAll(){
    $http(configObject).then(handleSuccess, handleFailure);
  };

  function showRand(){
    $http(randObject).then(handleSuccess, handleFailure);
  };

  $scope.randomAthletes = function(){
    var randSport = '';
    $http.get('/olympics/randomAthletes').then(function(request, response){
      console.log(response);
      showRand();
      $scope.showError = false;
    }, function(response){
      $scope.showError = true;
      console.log(response);
    })
  };

  showAll();
});
