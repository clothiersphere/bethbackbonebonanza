var ImagesCollectionView = Backbone.View.extend({
	
	tagName: "table", 


	initialize: function (){
		console.log(this.collection)
		this.collection.on('add', this.render, this)
		
		this.render();
	},

	render: function(){
		// this.$el.children().detatch();

		return this.$el.html('<th>Images</th>').append(
     	this.collection.map(function(url){
        return new ImageModelView({model: url}).render();
      })
    );
  }
				

});