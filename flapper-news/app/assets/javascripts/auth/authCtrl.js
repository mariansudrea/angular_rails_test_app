app.controller('AuthCtrl', ['$scope','$state','Auth',function($scope, $state, Auth){
  	$scope.login = function() {
    	Auth.login($scope.user).then(function(){
      		$state.go('home');
    	});
  	};

  	$scope.register = function() {
    	Auth.register($scope.user).then(function(response){
			console.log("good: "+response.data);
      		$state.go('home');
    		},function(response){
			for ( i in response.data.errors ) {
				console.log("key: "+ i + " , Value: " + response.data.errors[i]);
			}
		});
  	};
}]);
