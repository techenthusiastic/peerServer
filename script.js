const express = require("express");
const app = express();
//
app.get("/", (req, res, next) => res.send("Hello World!"));
//
const http = require("http");
const httpServer = http.createServer(app);
//
const { ExpressPeerServer } = require("peer");
//
const peerServer = ExpressPeerServer(httpServer, {
	debug: true,
	path: "/myapp",
});
//
app.use("/peerjs", peerServer);
//
const PORT = process.env.PORT || 9000;
httpServer.listen(PORT, function () {
	console.log(`Server Running on Port ${PORT}`);
});
