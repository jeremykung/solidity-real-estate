//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
}

// Escrow means to hold money or property until conditions are met
contract Escrow {
    address public lender;
    address public inspector;
    address public nftAddress;
    address payable public seller;

    // _ is prepended to denote local scope vars and fn parameters (also avoids naming conflict with above vars)
    constructor(
        address _nftAddress, 
        address payable _seller, 
        address _inspector, 
        address _lender
    ) {
        nftAddress = _nftAddress;
        seller = _seller;
        inspector = _inspector;
        lender = _lender;
    }
}
