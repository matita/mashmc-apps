module.exports = function(app) {
  var me = this;
  console.log('masmc-apps ctor. name:', app.name);

  me.api.get('.json', function(response) {
    me.$root.find('.main').html(response.map(me.tmpl.plugin));
  })
}