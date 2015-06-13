var ImageModelView = Backbone.View.extend({
	
	tagname: 'tr',
	template: _.template('<td>(<%= title %>)</td>'),

	events: {
		'click': function (){
			this.model.display();
		}
	},
	render: function (){
		return this.$el.html(this.template(this.model.attributes));
	}

});