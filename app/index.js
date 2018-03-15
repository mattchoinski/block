const express = require('express');
const Blockchain = require('../blockchain');
const bodyParser = require('body-parser');
const PeerToPeerServer = require('./peertopeerserver');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();

const bc = new Blockchain();
const p2pServer = new PeerToPeerServer(bc);

app.use(bodyParser.json());


app.get('/blocks', (req, res) => {
	res.json(bc.chain);
});

app.post('/mine', (req, res) => {
	const block = bc.addBlock(req.body.data);
	console.log(`new block added: ${block.toString()}`);
	res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => {
	console.log(`listening on port ${HTTP_PORT}`);
});

p2pServer.listen();