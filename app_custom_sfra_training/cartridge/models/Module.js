'use strict';
var abc = function()
    {
	var arrayList = require ('dw/util/ArrayList');
	var pmgr = require ('dw/catalog/ProductMgr');
	var site = require ('dw/system/Site');
	var mySite = site.getCurrent();
	var myCustomPerf = mySite.getCustomPreferenceValue('Product');
	var al = new arrayList();
	   for (var i=0; i < myCustomPerf.length; i++){
		   al.add(pmgr.getProduct(myCustomPerf[i]));
	   }
	   return al ;
	   
    };
module.exports = abc();