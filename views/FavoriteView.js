var FavoriteView = Backbone.View.extend({
	initialize: function (){
		this.collection.on('add remove', this.render, this);
		this.render();
	},

	render: function (){
		this.$el.children().detatch();
		return this.$el.html('<th>Favorites</th>').append(
			this.collection.map(function (image){
				return new FavoriteView({model: image}).render();
			})
		);
	}
});