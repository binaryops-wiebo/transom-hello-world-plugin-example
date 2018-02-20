function HelloPlugin() {
	this.initialize = function(server, options) {
		console.log("Initializing the Hello Plugin");
		server.get("/", function(req, res, next) {
            console.log("Saying Hello!");
			res.send("Hello World");
			next();
		});
	}
}
module.exports = new HelloPlugin();