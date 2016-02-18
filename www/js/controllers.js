angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('ReportsCtrl', function($scope) {})
.controller('NewuserCtrl', function($scope) {})

.controller('FocusCtrl', function($scope) {
  $scope.focusPoints = 0;
  $scope.veryFocused = function(){
    $scope.focusPoints = $scope.focusPoints + 4;
    document.getElementById("button2").style.visibility = "hidden";//Get element...
    document.getElementById("button3").style.visibility = "hidden";//Get element...
    document.getElementById("button4").style.visibility = "hidden";//Get element...
    document.getElementById("button1").setAttribute("disabled","disabled");//Get element...
    alert("When you click Very Focused, you earn "+ $scope.focusPoints+ " points");
  }
  $scope.focused = function(){
    $scope.focusPoints = $scope.focusPoints + 3;
    document.getElementById("button1").style.visibility = "hidden";//Get element...
    document.getElementById("button3").style.visibility = "hidden";//Get element...
    document.getElementById("button4").style.visibility = "hidden";//Get element...
    document.getElementById("button2").setAttribute("disabled","disabled");//Get element...
    alert("When you click Focused, you earn "+ $scope.focusPoints+ " points");

    }//$scope.times///checks current time...if matches set time,
    //then set all buttons properties to visible and enabled. Record the value of
    //$scope.focusPoints for that time period on that day.
    //http://www.w3schools.com/js/js_timing.asp

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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
/*})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };*/
});
