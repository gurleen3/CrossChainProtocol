// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.2 <0.9.0;

interface StndInterface {
    // function transfer(address recipient, uint amount) external;
    function transferFrom(address _from, address _to, uint256 _value, uint256 chainId) external;
    
    event OneventReceived (
        uint256 chainId,
        address to,
        address from,
        string data,
        );
    event OneventSent (
        uint256 chainId,
        address to,
        address from,
        string data,
    );
        
// gas and gasprice calculated from offchain


// log.topics for The list of topics (indexed properties) for this log.
