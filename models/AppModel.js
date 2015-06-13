var AppModel = Backbone.Model.extend({

  initialize: function(params){
  	this.set('imageModel',  new ImageModel());
  	this.set('images', params.library);
  
  	params.library.on('display', function(image){
  		this.get('imageModel').set('url', image.get('url'));
  	}, this);
  	// params.library.on('makeFavorite', function(image){
  	// 	this.get('imageModel').set('favorte', 'yes');
  	// })
	}
});