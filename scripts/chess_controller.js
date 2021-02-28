function placement(id, colour, piece){
	name = colour + "_" + piece;
	var square = document.getElementById(id);
	
	square.style.backgroundImage = "url('../images/" + name +".png')";
	square.classList.add(colour);
	square.classList.add(piece);
}

function initialize(){
	placement('21', 'White', 'Pawn');	
	placement('22', 'White', 'Pawn');	
	placement('23', 'White', 'Pawn');	
	placement('24', 'White', 'Pawn');	
	placement('25', 'White', 'Pawn');	
	placement('26', 'White', 'Pawn');	
	placement('27', 'White', 'Pawn');	
	placement('28', 'White', 'Pawn');

	placement('11', 'White', 'Rook');
	placement('18', 'White', 'Rook');

	placement('12', 'White', 'Knight');
	placement('17', 'White', 'Knight');

	placement('13', 'White', 'Bishop');
	placement('16', 'White', 'Bishop');

	placement('15', 'White', 'King');
	placement('14', 'White', 'Queen');

	placement('71', 'Black', 'Pawn');	
	placement('72', 'Black', 'Pawn');	
	placement('73', 'Black', 'Pawn');	
	placement('74', 'Black', 'Pawn');	
	placement('75', 'Black', 'Pawn');	
	placement('76', 'Black', 'Pawn');	
	placement('77', 'Black', 'Pawn');	
	placement('78', 'Black', 'Pawn');

	placement('81', 'Black', 'Rook');
	placement('88', 'Black', 'Rook');	

	placement('82', 'Black', 'Knight');
	placement('87', 'Black', 'Knight');

	placement('83', 'Black', 'Bishop');
	placement('86', 'Black', 'Bishop');

	placement('85', 'Black', 'King');
	placement('84', 'Black', 'Queen');
}

window.onload = ()=>{
	initialize();
}