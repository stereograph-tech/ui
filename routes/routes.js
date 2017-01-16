var fs = require('fs');
var path = require('path');

var appRouter = (app) => {

	app.get("/account", (req, res) => {
	    var accountMock = {
	        "username": "dannybullis",
	        "password": "1234",
	        "twitter": "@dannybullis"
	    }
	    if(!req.query.username) {
	        return res.send({"status": "error", "message": "missing username"});
	    } else if(req.query.username != accountMock.username) {
	        return res.send({"status": "error", "message": "wrong username"});
	    } else {
	        return res.send(accountMock);
	    }
	});

	app.get('/config', (req, res) => {
		
		fs.readFile('build/config.json', (err, data) => {
			if(err) {
				res.send(err);
			}
			res.send(JSON.parse(data));
		});
	});
}

module.exports = appRouter;