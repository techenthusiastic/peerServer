const express = require("express");
const app = express();
//
app.get("/", (req, res, next) => res.send("Hello world!"));
//
const http = require("http");
const httpServer = http.createServer(app);
httpServer.listen(9000, function () {
	console.log(`Server Running on Port 9000`);
});
//
const { ExpressPeerServer } = require("peer");
//
const peerServer = ExpressPeerServer(httpServer, {
	debug: true,
	path: "/crapp",
});

app.use("/peerjs", peerServer);