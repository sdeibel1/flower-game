$(document).ready(function(){
	var game_data = {
		'flower-count': 0,
		'mice-count': 0,
		'rock-count': 0,
		'rock-rate': 5
	}
	$("#dwarf-button").hide();
	$("#mice-button").hide();
	$("label[for=dwarf-button]").hide();
	$("label[for=mice-button]").hide();
	var game_loop = window.setInterval(function() {
		miceWork();
	}, 1000);


	$(".purchase").click(function() {
		let id = $(this).attr('id').split('-')[0] + "-count";
		increment(id);
	});

	$("#dwarf-button").click(function() {
		game_data['flower-count'] -= game_data['rock-rate'];
		game_data['rock-count']++;
		$("#rock-count").text(game_data['rock-count']);
	});

	function increment(id, by=1) {
		game_data[id] += by;
		$("#" + id).text(game_data[id]);

		if (id === "flower-count" 
			&& $("#mice-button").is(":hidden") 
			&& game_data["flower-count"] >= 10) 
		{
			$("#mice-button").show();
			$("label[for=mice-button]").show();	
		}


	} 	

	function miceWork() {
		increment('flower-count', game_data['mice-count']);
	}


	// helpers
	function getItemVar(str) {
		return str.split('-')[0] + "-count";
	}
});