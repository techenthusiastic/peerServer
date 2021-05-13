const express = require("express");
const fs = require("fs");
const app = express();
//
app.get("/", (req, res, next) => res.send("Hello world!"));
//
const http = require("http");
const httpServer = http.createServer(app);
//
const { ExpressPeerServer } = require("peer");
//
const peerServer = ExpressPeerServer(httpServer, {
	debug: true,
	path: "/myapp",
	ssl: {
		key: fs.readFileSync("./cert/key.pem", "utf8"),
		cert: fs.readFileSync("./cert/cert.pem", "utf8"),
	},
});
//
app.use("/peerjs", peerServer);
//
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, function () {
	console.log(`Server Running on Port ${PORT}`);
});
