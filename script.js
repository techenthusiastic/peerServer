const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 8465, path: "/blowapp" });
// peerjs --port 5472 --key peerjs --path /blowapp
