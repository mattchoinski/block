const SHA256 = require('crypto-js/sha256');

class Block {
	
	constructor(timestamp, lastHash, hash, data) {
		this.timestamp = timestamp;
		this.lastHash = lastHash;
		this.hash = hash;
		this.data = data;
	}

	toString() {
		return `Block -
		Timestamp: ${this.timestamp}
		Last Hash: ${this.lastHash.toString(0, 10)}
		Hash	 : ${this.hash.toString(0, 10)}
		DATA	 : ${this.data};
		`
	}
	/**
	 * init block called genesis with hardcoded data
	 */
	static genesis() {
		return new this('Genesis time', '------', 'f1r57-h45h', []);
	}

	/**
	 * 
	 * @param {*} lastBlock shows last link on chain
	 * @param {*} data info being passed along ie 'jeans, money'
	 * mines a new block to be passed around
	 */
	static mineBlock(lastBlock, data) {
		const timestamp = Date.now();
		const lastHash = lastBlock.hash;
		const hash = Block.hash(timestamp, lastHash, data);


		return new this(timestamp, lastHash, hash, data);
	}
	/**
	 * 
	 * @param {*} timestamp  time stamp of when block was created
	 * @param {*} lastHash hash of last block on chain
	 * @param {*} data info being passed around
	 */
	static hash(timestamp, lastHash, data) {
		return SHA256(`${timestamp}${lastHash}${data}`).toString();
	}

	
	static blockHash(block) {
		const { timestamp, lastHash, data} = block;
		return Block.hash(timestamp, lastHash, data);
	}
}

module.exports = Block;