var ImageModelView = Backbone.View.extend({
	
	tagname: 'tr',
	template: _.template('<td>(<%= title %>)</td>'),

	events: {
		'click': function (){
			// console.log('click registered in imagemodelview')
			this.model.display();
			//this.trigger
		}
	},
	render: function (){
		return this.$el.html(this.template(this.model.attributes));
	}

});