(function(root){
	var Nim = root.Nim = (root.Nim || {});
	var AI = root.Nim.AI = function($canvas) {
		this.$canvas = $canvas;
	};

	AI.prototype.playTurn = function() {
		var stickCounts = this.getStickCounts();
		var xorState = this.xorify(this.binify(stickCounts));
		console.log(xorState);
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