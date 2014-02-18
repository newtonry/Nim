(function(root){
	var Nim = root.Nim = (root.Nim || {});
	var AI = root.Nim.AI = function($canvas) {
		this.$canvas = $canvas;
	};

	AI.prototype.playTurn = function(onTurnComplete) {
		var winningMove = (this.pickWinningMove() || this.pickRandomMove());
		var that = this;

		if (!winningMove) {
			debugger
		}

		setTimeout(function(){
			that.takeSticks(winningMove[0], winningMove[1], onTurnComplete);
		}, 750);
	};

	AI.prototype.pickWinningMove = function() {
		var stickCounts = this.getStickCounts();
		var length = stickCounts.length;
		
		for(var column = 0; column < length; column++) {
			var stickCount = stickCounts[column];
			var decrement = 1;

			while (stickCount - decrement >= 0) {
				var possibleCounts = stickCounts.slice();
				possibleCounts[column] -= decrement;
				var xorState = this.xorify(this.binify(possibleCounts));

				if (xorState === "000") {
					return [decrement, column];
				}
				decrement++;
			}
		}
		return false;	
	};

	AI.prototype.pickRandomMove = function() {
		var stickCounts = this.getStickCounts();
		var column = 0;

		while (column < stickCounts.length) {
			if (stickCounts[column] > 0) {
				return [1, column];
			}
			column++;
		}
	};

	AI.prototype.takeSticks = function(num, column, onTurnComplete) {
		var $column = $(this.$canvas.find('.column')[column]);
		var $removalSticks = $($column.find('.stick').slice(0, num))
		
		$removalSticks.addClass('ai-removing');

		setTimeout(function(){
			$removalSticks.each(function(ind, stick) {
				$(stick).fadeOut(400, function() {
					$(stick).remove();
				});
			});
			onTurnComplete();
		}, 500);
	};

	AI.prototype.getStickCounts = function() {
		var stickCounts = [];
		_.each(this.$canvas.find('.column'), function(column) {
			stickCounts.push($(column).find('.stick').length);
		});
		
		return stickCounts;
	};
	
	AI.prototype.xorify = function(binaryCounts) {
		var xorState = binaryCounts[0];
		var length = binaryCounts.length;
		
		for(var i=1; i < length; i++) {
			xorState = this.xor(xorState, binaryCounts[i]);
		}
		return xorState;
	};

	AI.prototype.xor = function(str1, str2) {
		var length = str1.length;
		var xored = "";
		
		for(var i=0; i < length; i++) {
			xored += (str1[i] === str2[i] ? '0' : '1')
		}
		return xored;
	};
	
	AI.prototype.binify = function(stickCounts) {
		var binaryCounts = [];
	
		_.each(stickCounts, function(count) {
			var binNum = count.toString(2);
			while (binNum.length < 3) { binNum = "0" + binNum; }
			binaryCounts.push(binNum);	
		});
		
		return binaryCounts;
	};
})(this);