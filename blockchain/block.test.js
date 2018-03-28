const Block = require('./block');
const { DIFFICULTY } = require('../config');

describe('Block', () => {
  let data, lastBlock, block;
  beforeEach(() => {
    data = 'bar';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });
  it('sets `data` to match givein input', () => {
    expect(block.data).toEqual(data);
    expect(block.lastHash).toEqual(lastBlock.hash);
  });

  it('generates a hash that matches the difficulty', () => {
    expect(block.hash.substring(0, DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY));
  });
});
