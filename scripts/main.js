require(["jquery-2.1.0.min.js"], function() {
	require(["jquery-ui-1.10.4.custom.min.js"], function() {
		require(["nim"], function() {
			require(["ui.js"], function() {
		 	 $(document).ready(function(){
		 		 var game = new Nim.Game();
		 		 game.start($('#game-holder'));
		 	 });
				

			});
		});
	});
});