pragma solidity ^0.4.21;

contract Game {
	function isRegistered(address playerAddress) public view returns (bool);
	function isPlaying(address playerAddress) public view returns (bool);
	function setPlaying(address playerAddress) public;
}
