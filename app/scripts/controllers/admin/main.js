GLClient.controller('AdminCtrl',
    ['$scope', '$http', '$location', 'localization', 'AdminNode',
    'AdminContexts', 'AdminReceivers',
    function($scope, $http, $location, localization, AdminNode, AdminContexts,
      AdminReceivers) {

  // XXX convert this to a directive
  // This is used for setting the current menu in the sidebar
  var current_menu = $location.path().split('/').slice(-1);
  $scope.active = {};
  $scope.active[current_menu] = "active";

  $scope.localization = localization;
  $scope.node_info = localization.node_info;

  $scope.adminNode = AdminNode.get();
  $scope.adminReceivers = AdminReceivers.query();
  $scope.adminContexts = AdminContexts.query();

  // XXX find a more elegant solution
  // This is required for the step by step wizard.
  $scope.steps = [
    '1 Content settings',
    '2 Notification and Delivery',
    '3 Review your settings'
  ];

  $scope.saveall = function() {
    $scope.adminNode.$save();
    //$scope.adminReceivers.$save();
    console.log($scope.adminContexts);
    $scope.adminContexts.$save();
  }

}]);
