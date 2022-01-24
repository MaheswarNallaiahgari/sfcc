/**
*This is my Controller to demo ISML Tags
*
* @module  controllers/Training
*/

'use strict';

var server = require('server');

server.get('Start',function(req, res, next){
	
	res.render('training/training');
	next();
});

module.exports = server.exports();



