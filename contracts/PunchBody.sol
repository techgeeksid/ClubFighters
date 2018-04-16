pragma solidity ^0.4.21;

import "./Action.sol";

contract PunchBody is Action {
	event PlayPunchBody(uint _fightId);

	function name() public view returns(string) {
		return "PunchBody";
	}

	function play(uint _fightId) external {
		emit PlayPunchBody(_fightId);
	}
}
