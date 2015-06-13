var BigPicView = Backbone.View.extend({
	
	template: _.template("<p><%=title %></p> "),
	// <img src='<%= url %>'style='width:300px;height:300px;'></p>
	initialize:function(){
		this.model.on('change:url', function(){
			this.render();
		}, this);
		this.render();
	},
	
	render: function (){
		this.$el.html(this.template(this.model.attributes));
		return this.$el;
	}
});