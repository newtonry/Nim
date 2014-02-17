(function(root){
	var Nim = root.Nim = (root.Nim || {});
	var Game = root.Nim.Game = function() {};
	
	Game.prototype.start = function($canvas) {
		this.humanPlayersTurn = false;
		this.ui = new Nim.UI($canvas);
		this.ui.setup([5,4,3], this.nextTurn.bind(this));		
		this.ai = new Nim.AI($canvas);
	};
	
	Game.prototype.nextTurn = function() {
		if (this.isWon()) {
			alert("The game is over");
		}
		this.humanPlayersTurn = !this.humanPlayersTurn;
		this.ai.playTurn();
	};
	
	Game.prototype.isWon = function() {
		if (this.ui.$canvas.find(".stick").length <= 0) { return true; }
		return false;
	};
})(this);