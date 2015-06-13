var AppModel = Backbone.Model.extend({

  initialize: function(params){
  	this.set('imageModel',  new ImageModel());
  	this.set('images', params.library);
  	// console.log(this.get('images'));
  
  

  	params.library.on('display', function(image){
  		this.get('imageModel').set('url', image.get('url'));
  		//this.set({'currentImage': image});
  	}, this);


  	// this.get('images').on('display', function (){
  	// 	this.set({ bigpic: 'yes' , new )
  	// })

  	// params.library.on('makeFavorite', function(image){
  	// 	this.get('favorite').add(image);
  	// })
	}
});