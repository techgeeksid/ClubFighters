pragma solidity ^0.4.21;

library Structs {
	struct Player {
		string name;
		bool playing;
	}

	struct Fight {
		address playerLeft;
		address playerRight;
		bool started;
		bool ended;
	}
}
