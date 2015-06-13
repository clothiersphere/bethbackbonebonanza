var AppView = Backbone.View.extend({
	
	initialize: function(params){
		this.imagesView = new ImagesCollectionView({collection: this.model.get('images')});
		this.bigpicView = new BigPicView({model: this.model.get('imageModel')});

	},

	render: function(){
		console.log("HEEEEEE", this.bigpicView.$el);
		return this.$el.html([
			this.bigpicView.$el,
			this.imagesView.$el
			// this.favoriteView.$el,
	]);
	}	
});