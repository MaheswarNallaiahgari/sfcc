/**
* Description of the Controller and the logic it provides
*
* @module  controllers/UseModule
*/

'use strict';
var server = require('server');
var out = require('../models/Module');
server.get('Start',function(req, res, next){
	
	res.render('training/fileModules' , {out : out });
	next();
});

module.exports = server.exports();


