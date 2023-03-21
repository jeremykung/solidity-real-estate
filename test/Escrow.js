const { expect } = require('chai');
const { ethers } = require('hardhat');

// helper fn that converts currency to tokens
const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

// tests
describe('Escrow', () => {
    
    it('saves the addresses', async () => {
        const RealEstate = await ethers.getContractFactory('RealEstate')
        realEstate = await RealEstate.deploy()

        console.log(realEstate.address)
    })

})
