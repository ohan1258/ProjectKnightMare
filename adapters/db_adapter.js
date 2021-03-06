//this file will contain functions for db operations
const Assert = require("assert");

function remove_from_current_games(db, gameID){
	const games = db.collection("current_games");
	var query = {gameID:gameID};

	games.findOneAndDelete(query, (err, res)=>{
		Assert.equal(null, err);
		return res;
	});
}

module.exports = {

	insert_into_current_games:function (db, game){
		const games = db.collection("current_games");
		games.insertOne(game, (err, res)=>{
			Assert.equal(null, err);
			return res;
		});
	},

	get_current_game:function (db, gameID){
		const games = db.collection("current_games");
		var query={gameID:gameID};
		games.find(query).toArray((err, res)=>{
			Assert.equal(null, err);
			Assert.equal(1, res.length);
			return res;
		});
	},

	update_position:function (db, gameID, newPosition){
		const games = db.collection("current_games");
		var query = {gameID:gameID};
		var updatedPosition={$set:{position:newPosition}};
		games.updateOne(query, updatedPosition, (err, res)=>{
			Assert.equal(null, err);
			return true;
		});
	},

	move_to_completed_games:function (db, gameID){
		const cur_games = db.collection("current_games");
		const com_games = db.collection("completed_games");

		var query = {gameID:gameID};

		cur_games.findOne(query, (err, res)=>{
			Assert.equal(null, err);

			console.log(res);

			com_games.insertOne(res, (err, res)=>{
				Assert.equal(null, err);
			});
		});		
	}
};