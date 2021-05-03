const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 8465, path: "/myapp" });
