pragma solidity ^0.4.21;

import "./Game.sol";

contract Action {
	Game public game;

	function Action(address _gameAddress) public {
		game = Game(_gameAddress);
	}

	function name() public view returns (string);
	function play(uint _fightId) external;
}
