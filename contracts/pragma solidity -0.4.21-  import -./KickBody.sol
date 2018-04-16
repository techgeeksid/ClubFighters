pragma solidity ^0.4.21;

import "./Action.sol";

contract KickBody is Action {
	event PlayKickBody(uint _fightId);

	function name() public view returns(string) {
		return "KickBody";
	}

	function play(uint _fightId) external {
		emit PlayKickBody(_fightId);
	}
}
