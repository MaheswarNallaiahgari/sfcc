/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Content
*/

'use strict';
var server = require('server');

server.get('Start',function(req, res, next){
	
	res.render('training/contentAssets');
	next();
});

module.exports = server.exports();


