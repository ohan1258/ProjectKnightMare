//this file will contain functions for db operations


function insert_into_current_games(db, game){
	const games = db.collection("current_games");
	games.insertOne(game, (err, res)=>{
		assert(null, err);
		return res;
	});
}

function get_current_game(db, gameID){
	const games = db.collection("current_games");
	var query={gameID:gameID};
	games.find(query).toArray((err, res)=>{
		assert(null, err);
		assert(1, res.length);
		return res[0];
	});
}

function update_position(db, gameID, newPosition){
	const games = db.collection("current_games");
	var query = {gameID:gameID};
	var updatedPosition={$set:{position:newPosition}};
	games.updateOne(query, updatedPosition, (err, res)=>{
		assert(err);
		return true;
	});
}

function remove_from_current_games(db, gameID){
	const games = db.collection("current_games");
	var query = {gameID:gameID};

	games.findOneAndDelete(query, (err, res)=>{
		assert(null, err);
		return res;
	});
}

function move_to_completed_games(db, gameID){
	const games = db.collection("completed_games");

	var game = remove_from_current_games(db, gameID);
	games.insertOne(game, (err, res)=>{
		assert(null, err);
		return res;
	});
}