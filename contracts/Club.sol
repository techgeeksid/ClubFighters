pragma solidity ^0.4.21;


contract Club {

	struct Player {
		string name;
		bool playing;
	}

	mapping(address => Player) public players;

	modifier onlyNewPlayer() {
		require(bytes(players[msg.sender].name).length == 0);
		_;
	}

	function createPlayer(string _name) external onlyNewPlayer {
		players[msg.sender] = Player(_name, false);
	}

}
