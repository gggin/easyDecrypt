

var express = require('express');
var controller = require('./thing.controller');
var one = require('oneline-crypto');

var router = express.Router();

router.get('/', controller.index);
//router.get('/:id', controller.show);
//router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);
router.get('/de', function(req, res){
	var key = req.query.key;
	var data = req.query.data;
	var result = one.decryptAES(data, one.MD5(key));
	res.send({a:result}).status(200);
});

module.exports = router;
