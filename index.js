function Apps(mashmc, route) {
  var me = this;

  console.log('init mashmc-apps');

  route
    .get('.json', function(req, res) {
      var apps = mashmc.apps.all();
      res.json(apps);
    });
}

module.exports = Apps;