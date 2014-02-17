exports.index = function(req, res) {
	res.send("Welcome to CS 1501");
}

exports.watch = function(req, res) {
	res.send('hello');
	var video_id = 'http://www.youtube.com/watch?v=q3bGYljQ5Uw';
	res.render('watch', { id: video_id }, function(err, html) {
		res.send(html);
	})
}
