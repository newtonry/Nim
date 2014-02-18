(function(root){
	var Nim = root.Nim = (root.Nim || {});
	var Game = root.Nim.Game = function() {};
	
	Game.prototype.start = function($canvas) {
		this.ui = new Nim.UI($canvas);
		this.ui.setup([5,4,3], this.setComputerTurn.bind(this));
		this.ai = new Nim.AI($canvas);
	};
	
	Game.prototype.setHumanTurn = function() {
		this.humanPlayersTurn = true;
		this.ui.enableSelection();

		var that = this;
		var onTurnComplete = function() {
			that.alertIfWon();
			that.setComputerTurn();
		};
	};

	Game.prototype.setComputerTurn = function() {
		this.humanPlayersTurn = false;
		this.ui.disableSelection();
		
		var that = this;
		var onTurnComplete = function() {
			that.alertIfWon();
			that.setHumanTurn();
		};
		
		this.ai.playTurn(onTurnComplete.bind(this));
	};

	Game.prototype.alertIfWon = function() {
		if (this.isWon()) {
			var output = (this.humanPlayersTurn ? "You" : "The computer") + " wins!"
			alert(output);
			return;
		}
	};
	
	Game.prototype.isWon = function() {
		if (this.ui.$canvas.find(".stick").length <= 0) { return true; }
		return false;
	};
})(this);