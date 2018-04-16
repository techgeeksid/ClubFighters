pragma solidity ^0.4.21;

import "./Action.sol";

contract NullAction is Action {
	event PlayNullAction(uint _fightId);

	function NullAction(address _gameAddress) Action(_gameAddress) public {}

	function name() public view returns (string) {
		return "NullAction";
	}

	function play(uint _fightId) external {
		emit PlayNullAction(_fightId);
	}
}
