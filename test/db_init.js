//DB SCHEMA
//
// current_games
//{
//	gameID:int,
//	playerWhite:string
//  playerBlack:string
//	position:string
//}
//
// completed_games
//{
//	gameID:int,
//	playerWhite:string
//  playerBlack:string
//  winner:string (black/white/draw)
//	position:string
//}
//
//position: string encoding of the chess board where 64 characters denote 64 squares of chess board
//starting from A1 to H8
//pieces are: 
//	X:empty
//	P:white pawn
//	p:black pawn
//	N:white knight
//	n:black knight
//	B:white bishop
//	b:black bishop
//	R:white rook
//	r:black rook
//	K:white king
//	k:black king
//	Q:white queen
//	q:black queen		  	

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "castle";

MongoClient.connect(url, (err, client)=>{
	assert.equal(null,err);
	console.log("connected to server");

	const db = client.db(dbName);
	console.log("database:"+dbName+" created");
	db.createCollection("current_games", (err, res)=>{
		assert.equal(null,err);
		console.log("collection:current_games created");
	});
	db.createCollection("completed_games", (err, res)=>{
		assert.equal(null,err);
		console.log("collection:completed_games created");
	});
	client.close();
});
