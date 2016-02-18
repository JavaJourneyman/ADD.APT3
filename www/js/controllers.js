angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('ReportsCtrl', function($scope) {})
.controller('NewuserCtrl', function($scope) {})

.controller('FocusCtrl', function($scope) {
  $scope.focusPoints = 0;
  $scope.veryFocused = function(){
    $scope.focusPoints = $scope.focusPoints + ;
    alert("When you click Very Focused, you earn "+ $scope.focusPoints+ " points");
  }
  //How do I create controllers to manage each of the buttons? As a group or individually?

/*.controller('FocusCtrl', function($scope) {
  $scope.focusPoints = 0;
  $scope.focused = function(){
    $scope.focusPoints = $scope.focusPoints + 1;
    alert("When you click Focused, you earn "+ $scope.focusPoints+ " points");
  }*/

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller("ExampleController", function($scope) {
    //New controller for the chart shold be moved.
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
 
});

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };*/
});
