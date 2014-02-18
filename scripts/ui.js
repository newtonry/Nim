(function(root){
	var Nim = root.Nim = (root.Nim || {});
	var UI = root.Nim.UI = function($canvas) {
		this.$canvas = $canvas;
	};
	
	UI.prototype.setup = function(columns, nextTurn) {
		this.$canvas.empty();
		this.draw(columns);
		this.makeColumnsSelectable(nextTurn);
	};

	UI.prototype.makeColumnsSelectable = function(onTurnComplete) {
		this.$canvas.find('.column').selectable({
			stop: function() {
				$(".ui-selected", this).each(function(){
						$(this).toggleClass('stick');
					var that = this;
					$(this).fadeOut(400, function(){ 
						$(that).remove();
					});
				});
				onTurnComplete();
			}
		});
	};

	UI.prototype.enableSelection = function() {
		this.$canvas.find('.column').selectable("enable");
	}

	UI.prototype.disableSelection = function() {
		this.$canvas.find('.column').selectable("disable");
	}

	UI.prototype.draw = function(columns) {
		var output = "";
		_.each(columns, function(sticks, ind){
			output += "<div class='column'>";

			_(sticks).times(function(){
				output += "<div class='row stick'></div>";
			});
			output += "</div>"
		});
		
		this.$canvas.append(output);
	};
})(this);