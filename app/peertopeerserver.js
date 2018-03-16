const Websocket = require("ws");
const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

class PeerToPeerServer {
	constructor(blockchain) {
		this.blockchain = blockchain;
		this.sockets = [];
	}

	listen() {
		const server = new Websocket.Server({ port: P2P_PORT });
		server.on("connection", socket => this.connectSocket(socket));

		this.connectToPeers();

		console.log(`Listening for peer to peer connections on: ${P2P_PORT}`);
	}

	connectToPeers() {
		peers.forEach(peer => {
			const socket = new Websocket(peer);

			socket.on("open", () => this.connectSocket(socket));
		});
	}

	messageHandler(socket) {
		socket.on('message', message => {
			const data = JSON.parse(message);

			this.blockchain.replaceChain(data);

		})
	}

	connectSocket(socket) {
		this.sockets.push(socket);
		console.log("Socket connected");

		this.messageHandler(socket);

		this.sendChain(socket);
	}

	/**
	 * 
	 * @param {*} socket socket object from diff connection
	 */
	sendChain(socket) {
		socket.send(JSON.stringify(this.blockchain.chain));
	}
	/**
	 * syncs chain along all sockets connected
	 */
	syncChain() {
		this.sockets.forEach(socket => {
			this.sendChain(socket)
		})
	}
}

module.exports = PeerToPeerServer;
