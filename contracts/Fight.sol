pragma solidity ^0.4.21;

import "./Game.sol";

contract Fight {
	Game public game;

	address public playerLeft;
	address public playerRight;
	bool public started = false;
	bool public ended = false;

	event FightStarted(address _playerLeft, address _playerRight);

	function Fight(address _playerLeft) public {
		game = Game(msg.sender);
		playerLeft = _playerLeft;
	}

	modifier gameNotStarted() {
		require(!started);
		_;
	}

	function join() external gameNotStarted {
		require(msg.sender != playerLeft);
		require(game.isRegistered(msg.sender));
		require(!game.isPlaying(msg.sender));

		playerRight = msg.sender;
		game.setPlaying(msg.sender);
		_start();
  }

	function _start() private {
		started = true;
		emit FightStarted(playerLeft, playerRight);
	}
}
