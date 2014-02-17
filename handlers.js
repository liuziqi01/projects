exports.index = function(req, res) {
	res.send("This is Ziqi's Homework 4");
}

var watchf = function(req, res) {
	var video_id = 'http://www.youtube.com/watch?v=q3bGYljQ5Uw';
	res.render('watch', { id: video_id }, function(err, html) {
		res.send(html);
	})
}

exports.watch = watchf;
