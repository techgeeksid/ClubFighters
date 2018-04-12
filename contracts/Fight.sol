pragma solidity ^0.4.21;


contract Fight {

	address public player1 = 0;
	address public player2 = 0;
	bool public started = false;
	bool public ended = false;

	event Started(address _player1, address _player2);

	function Fight() public {
		player1 = msg.sender;
	}

	modifier gameNotStarted() {
		require(!started);
		_;
	}

	function join() external gameNotStarted {
		require(msg.sender != player1);
		player2 = msg.sender;
		started = true;
		emit Started(player1, player2);
  }

}
