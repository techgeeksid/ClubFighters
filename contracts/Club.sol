pragma solidity ^0.4.20;

import "./Structs.sol";
import "./Fight.sol";

contract Club {
	address owner;

	mapping(address => Structs.Player) public players;

	mapping(address => bool) public registeredFights;
	address[] public fights;
	uint public fightCount = 0;

	mapping(address => bool) public registeredActions;

	event FightCreated(uint _id, address _address);

	modifier onlyNewPlayer() {
		require(bytes(players[msg.sender].name).length == 0);
		_;
	}

	modifier onlyNotPlaying() {
		require(!players[msg.sender].playing);
		_;
	}

	function Club() public {
		owner = msg.sender;
	}

	modifier onlyOwner() {
		require(msg.sender == owner);
		_;
	}

	modifier onlyRegisteredFight() {
		require(registeredFights[msg.sender]);
		_;
	}

	function addAction(address actionAddress) external onlyOwner {
		registeredActions[actionAddress] = true;
	}

	function removeAction(address actionAddress) external { // onlyOwner {
		/* registeredActions[actionAddress] = false; */
	}

	function createPlayer(string _name) public onlyNewPlayer {
		players[msg.sender] = Structs.Player(_name, false);
	}

	function createFight() public onlyNotPlaying {
		address newFight = new Fight(msg.sender);
		fights.push(newFight);
		uint id = fightCount++;
		registeredFights[newFight] = true;

		players[msg.sender].playing = true;

		emit FightCreated(id, newFight);
	}

	function isRegistered(address playerAddress) public view returns (bool) {
		return (bytes(players[playerAddress].name).length != 0);
	}

	function isPlaying(address playerAddress) public view returns (bool) {
		return players[playerAddress].playing;
	}

	function setPlaying(address playerAddress) public onlyRegisteredFight {
		players[playerAddress].playing = true;
	}
}
