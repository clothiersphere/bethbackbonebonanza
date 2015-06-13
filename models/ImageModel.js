var ImageModel = Backbone.Model.extend({
	
		defaults: {
			url: '',
			title: '',
			bigpic: 'no',
			favorite: 'no'
		},
		display: function (){
			this.trigger('display',this);
		
		},
		makeFavorite: function (){
			this.trigger('makeFavorite',this);
		}
});