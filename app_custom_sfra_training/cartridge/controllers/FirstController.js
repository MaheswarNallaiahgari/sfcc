/**
* Description of the Controller and the logic it provides
*
* @module  controllers/FirstController
*/

'use strict';
var server = require('server');
var ArrayList=require("dw/util/ArrayList")
var Prod=require("dw/catalog/ProductMgr")
server.get('Start',function(req, res, next){
	var al=new ArrayList();
	al.add(Prod.getProduct('2619'));
	al.add(Prod.getProduct('firstProduct'));
	res.render('training/firstFile',{List:al});
	next();
});
module.exports=server.exports();