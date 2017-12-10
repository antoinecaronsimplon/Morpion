(function main(){
	var player = false;
	for (var i = 0; i < 3 ; i++){
		$('.morpion--table').append('<tr>');
		for (var a = 0; a < 3 ; a++){
			$('.morpion--table').append('<td id = '+i+'-'+a+'>'+i+'-'+a+'</td>');
		}
		$('.morpion--table').append('</tr>');
	}
	$('td').click(function(){
		var playerName = "";
		var self = this;
		if (player == false){
			player = true;
			$(self).html = 'X';
			console.log('x');
		}
		else {
			player = false;
			$(self).html = 'O';
			console.log('o');
		}
		// document.getElementById('render--player').innerHtml = ;

		
	})
		

	
})();



// var table = $('.morpion--table');
	// var row = 3;
	// var col = 3;

	// function createTable (rowTable, colTable){
	// 	for(var i=0 ; i<  rowTable ; i++){
	// 		var result = "";
	// 		for (var j=0 ; j<colTable; j){
	// 			result+='<td></td>';
	// 			table.append('<tr>'+result+'</tr>');
	// 		}
	// 	}
	// }
	// createTable (row, col);