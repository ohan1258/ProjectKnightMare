//script to test the db_controller
const DBAdapter = require("../adapters/db_adapter");
const Globals = require("../scripts/globals");
const MongoClient = require("mongodb").MongoClient;
const Assert = require("assert");

const url = "mongodb://localhost:27017";
const dbName = "castle";

MongoClient.connect(url, (err, client)=>{
	Assert.equal(null, err);
	console.log("connected to server");
	const db = client.db(dbName);

	//testing insert_into_current_games
	/*
	var game1 = {
		gameID:1,
		playerWhite:"player 1",
		playerBlack:"player 2",
		position: Globals.INIT_POS
	};

	var game2 = {
		gameID:2,
		playerWhite:"player 3",
		playerBlack:"player 4",
		position: Globals.INIT_POS
	}

	var res;
	res=DBAdapter.insert_into_current_games(db,game1);
	console.log(res);
	
	res=DBAdapter.insert_into_current_games(db,game2);
	console.log(res);*/

	//testing get_current_game
	/*
	var res;
	res = DBAdapter.get_current_game(db, 1);
	console.log(res);
	res = DBAdapter.get_current_game(db, 2);
	console.log(res);*/

	//testing update_position
	/*
	DBAdapter.update_position(db,1, "RNBQKBNRPPPPXPPPXXXXXXXXXXXXPXXXXXXXXXXXXXXXXXXXpppppppprnbqkbnr");
	*/
	DBAdapter.move_to_completed_games(db,1);
	//testing move_to_completed_games

	client.close();
});
