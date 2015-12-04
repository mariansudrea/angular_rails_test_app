
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
