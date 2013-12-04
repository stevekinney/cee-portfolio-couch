App.PublicationRoute = Ember.Route.extend({
  model: function (params) {
    if (params.publication_id === 'econedlink') params.publication_id = '\"econedlink\"';
    return Ember.$.getJSON('api/_design/publications/_list/lessons/lessons?start_key=' + params.publication_id + '&end_key=' + params.publication_id);
  },
  renderTemplate: function(controller, model) {
    this.render('publication', { into: 'application', controller: controller });
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});