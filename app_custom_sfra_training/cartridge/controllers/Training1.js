/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Training1
*/

'use strict';
var server = require('server');
server.get('Cookie',function(req, res, next){
	res.render('training/Cookies');
	next();
});
module.exports=server.exports();