//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol"; // built in solidity library
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract RealEstate is ERC721URIStorage {
    // Used to create unique IDs for our tokenIds when minting
    // import Counters.Counter from Counters library
    using Counters for Counters.Counter;
    // creating an instance of Counters.Counter called _tokensIds
    Counters.Counter private _tokenIds;

    constructor() ERC721("Real Estate", "REAL") {}

    function mint(string memory tokenURI) public returns (uint256) {
        // built in increment() fn because this is a Counters.Counter obj
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        // creating NFT metadata (address, tokenID)
        _mint(msg.sender, newItemId);
        // store the actual NFT (it's a link to an asset)
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }
}
