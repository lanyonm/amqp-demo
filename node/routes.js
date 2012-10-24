exports.home = function(req, res){
  res.render('home', {
    title: 'AMQP-Node Demo'
  });
};
