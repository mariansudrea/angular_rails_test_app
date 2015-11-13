app = angular.module('flapperNews', ['ui.router'])

app.config([
'$stateProvider',
'$urlRouterProvider', 
function($stateProvider, $urlRouterProvider){	

	$stateProvider
		.state('home', {
			url: '/home', 
			templateUrl: '/home.html', 
			controller: 'MainCtrl'
		});
	$stateProvider
		.state('posts', {
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'PostsCtrl'
		});
	$urlRouterProvider.otherwise('home');
}])
app.factory('posts', [function(){
	var o = {
		posts: [
			{title: 'post 1', upvotes: 5, comments: []},
			{title: 'post 2', upvotes: 15, comments: []},
			{title: 'post 3', upvotes: 45, comments: []},
			{title: 'post 4', upvotes: 25, comments: []},
			{title: 'post 5', upvotes: 10, comments: []}
		]
	};
	return o;
}])
app.controller('MainCtrl', ['$scope', 'posts',function($scope, posts){
	$scope.posts = posts.posts
	$scope.addPost = function(){
		if(!$scope.title || $scope.title === '') return;
		$scope.posts.push({
			title: $scope.title, 
			link: $scope.link, 
			upvotes: 0,
  			comments: [
    			{author: 'Joe', body: 'Cool post!', upvotes: 0},
			    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  			]
		});
		$scope.title = "";
		$scope.link = "";
	};
	$scope.incrementUpvotes = function(post){
		post.upvotes += 1;
	};
	$scope.myAlert = function(post){
		post.pink = ( post.pink ? false : true );
	};
	$scope.classLogic = function(post){
		return {
			pink: post.pink,
		};
	};
}]);
app.controller('PostsCtrl', ['$scope','$stateParams','posts', function($scope, $stateParams, posts){
	$scope.post = posts.posts[$stateParams.id];
	$scope.addComment = function(){
		if($scope.body === '') { return; }
		
		$scope.post.comments.push({
			body: $scope.body,
			author: 'user',
			upvotes: 0
		});
		$scope.body = '';
	};
	
}]);


