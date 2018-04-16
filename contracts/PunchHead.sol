pragma solidity ^0.4.21;

import "./Action.sol";

contract PunchHead is Action {
	event PlayPunchHead(uint _fightId);

	function name() public view returns(string) {
		return "PunchHead";
	}

	function play(uint _fightId) external {
		emit PlayPunchHead(_fightId);
	}
}
