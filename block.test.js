const Block = require('./block');

describe('Block', () => {
    let data, lastBlock, block;
    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    })
    it('sets `data` to match givein input', () => {
        expect(block.data).toEqual(data);
        expect(block.lastHash).toEqual(lastBlock.hash);
    })

    it('sests the `lastHash` of the block', () => { })
})