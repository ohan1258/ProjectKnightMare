function moves_rook(x,y){
	var possible_moves = Array();
	
	for (var i = y-1; i>0;i--) {
		
		if(is_filled(""+x+i)){
			break;
		}

		possible_moves.push([x,i]);	
	}
	
	for (var i = y+1; i <= 8; i++) {
		if(is_filled(""+x+i)){
			break;
		}

		possible_moves.push([x,i]);
	}
	
	for (var j = x+1; j <= 8; j++) {
		
		if(is_filled(""+j+y)){
			break;
		}

		possible_moves.push([j,y]);
	}
	
	for(var j= x-1; j>0 ; j--){
		if(is_filled(""+j+y)){
			break;
		}

		possible_moves.push([j,y]);
	}
	
	return possible_moves;
}

function moves_pawn(x,y,colour){
	var possible_moves = Array();

	if(colour=="White"){
		possible_moves.push([x+1,y]);
		if(x==2){
			possible_moves.push([x+2,y]);
		}
	}
	
	if(colour=="Black"){
		possible_moves.push([x-1,y]);
		if(x==7){
			possible_moves.push([x-2,y]);
		}
	}
	return possible_moves;
}

function moves_king(x,y){
	var possible_moves = Array();

	for (var i = y-1; i <= y+1; i++) {
		for (var j = x-1; j <= x+1; j++){
			if(i < 1 || i>8 ||
				j < 1 || j > 8){
				continue;
			}
			if (is_filled("" + j + i)){
				continue;
			}

			possible_moves.push([j,i]);
		}
	}

	return possible_moves;
}

function moves_knight(x,y){
	var possible_moves = Array();

	for (var i = -2;i<=2;i++){
		if(i==0){
			continue;
		}
		for(var j = -2; j<=2; j++){
			if(j==0 || i==j || i==-j ||
				(x+i)<1 || (x+i)>8 ||
				(y+j)<1 || (y+j)>8){
				continue;
			}

			if (is_filled("" + (x+i) + (y+j))){
				continue;
			}
			possible_moves.push([x+i,y+j])
		}
	}
			console.log.push
	return possible_moves;
}

function moves_bishop(x,y){
	var possible_moves = Array();

	for(var i = 1 ; (x-i)>0 && (y-i)>0; i++ ){

		if(is_filled(""+ (x-i) + (y-i))){
			break;
		}

		possible_moves.push([x-i, y-i]);
		
	}

	for(var i = 1 ; (x+i)<9 && (y-i)>0; i++ ){

		if(is_filled(""+ (x+i) + (y-i))){
			break;
		}

		possible_moves.push([x+i, y-i]);
	}	

	for(var i = 1 ; (x-i)>0 && (y+i)<9; i++ ){

		if(is_filled(""+ (x-i) + (y+i))){
			break;
		}

		possible_moves.push([x-i,y+i]);
	}

	for(var i = 1 ; (x+i)<9 && (y+i)<9; i++ ){

		if(is_filled(""+ (x+i) + (y+i))){
			break;
		}

		possible_moves.push([x+i, y+i]);
	}

	return possible_moves;
}

function moves_queen(x,y){
	var possible_moves = Array();
	console.log("init:"+possible_moves);
	possible_moves = moves_rook(x,y);
	console.log("rook:"+possible_moves); 
	possible_moves = possible_moves.concat(moves_bishop(x,y));
	console.log("bishop"+possible_moves);
	return possible_moves;
}