var bakeryApp = angular.module('bakeryApp', []);

bakeryApp.controller("cartController", function($scope, $timeout, $http) {
  $http({
    method: 'GET',
    url: '/bakery/product-list'
  }).success(function(data) {
    $scope.productList = data.res;
  })
  $scope.manageQuantity = function(idx,pid,type) {
    if(type == 'add')
      $scope.productList[idx].quant = $scope.productList[idx].quant + 1;
    else {
      if($scope.productList[idx].quant > 0)
        $scope.productList[idx].quant = $scope.productList[idx].quant - 1;
    }

    $http({
      method: 'GET',
      url: 'bakery/total-packs/'+pid+'/'+$scope.productList[idx].quant
    }).success(function(data) {
      console.log(data);
      if(data.res.packs) {
        let dt = [];
        angular.forEach(data.res.packs, function(v, i) {
          if(v.qty) {
            dt.push("Pack of "+v.packSize+": "+v.qty);
          }
        })
        $scope.productList[idx].msg = dt.join(', ');
      }
      else {
        $scope.productList[idx].msg = data.msg
      }
      if(data.res.amount) {
        $scope.productList[idx].price = data.res.amount;
      }
      else {
        $scope.productList[idx].price = 0;
      }
    })
  }
});
