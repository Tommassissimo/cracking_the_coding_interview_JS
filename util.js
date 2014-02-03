/*
utility function for testing purpose
 */
var util={};
util.isMatrixEqual = function (arr1,arr2){
	for(var i=0;i<arr1.length;++i){
				for(var j=0;j<arr1[i].length;++j){
					if (arr1[i][j]!==arr2[i][j]) {
						console.log(i,j,arr1[i][j],arr2[i][j]);
						return false;
					}
				}
			}
	return true;
};
module.exports = util;
