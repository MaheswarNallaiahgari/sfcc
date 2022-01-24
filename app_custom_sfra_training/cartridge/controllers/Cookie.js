/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Cookie
*/

'use strict';
var server = require('server');
var c = request.httpCookies['RedirectURL'].value;
server.get('Goto',function(req, res, next){
	res.render('training/cookies1',{cValue:c});
	next();
});
module.exports = server.exports();