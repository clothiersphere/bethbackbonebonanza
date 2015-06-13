var BigPicView = Backbone.View.extend({
	
	//el: "img",
	// tagname: 'tr',
	template: _.template("<img src='<%= url %>'style='width:300px;height:300px;'></p>"),
	initialize:function(){
		this.model.on('change:url', function(){
			console.log("URL CHANGED");
			this.render();
		}, this);
		this.render();
	},
	

	render: function (){
	
		// console.log("ATR",this.template(this.model.attributes));
		this.$el.html(this.template(this.model.attributes));
		// console.log(this.$el);
		return this.$el;
	}

});