pragma solidity ^0.4.21;

import "./Action.sol";

contract KickHead is Action {
	event PlayKickHead(uint _fightId);

	function name() public view returns(string) {
		return "KickHead";
	}

	function play(uint _fightId) external {
		emit PlayKickHead(_fightId);
	}
}
