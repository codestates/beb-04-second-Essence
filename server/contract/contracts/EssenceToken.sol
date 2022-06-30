// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EssenceToken is ERC20 {
    constructor() ERC20("EssenceToken", "ESS") {
          _mint(msg.sender, 100000000e18);
    }
    function mintToken(address to, uint256 amount) public returns (bool){
        require(to != address(0x0));
        require(amount > 0);
        _transfer(msg.sender, to, amount);
        _approve(to, msg.sender, allowance(to, msg.sender) + amount);  // approve 추가

        return true;
    }

    function transferallowance( address from, address to, uint256 amount) public returns (bool) {
        address spender = _msgSender(); 
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount); 
        _approve(to, spender, allowance(to, spender) + amount);
        return true;
    }
}