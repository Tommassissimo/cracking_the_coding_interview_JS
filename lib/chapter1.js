/*
	cracking the coding interview : chapter 1 Arrays and Strings
	author:Jiayi Zhou
	date:Feb.3.2014
 */
var cc={};
cc.q_1_1 = function  (string) {
	//check if a string is duplicated
	var chars = string.split('');
	var arr = [];

	for (var i = 0; i < chars.length; i++) {
		var c = chars[i];
		var ascii = c.charCodeAt(0);
		if (arr[ascii]) {
			return false;
		}
		else{
			arr[ascii]=true;
		}
	}
	return true;
};
cc.q_1_2 = function (string){
	//reverse a string
	return string.split('').reverse().join('');
};
cc.q_1_3 = function (string){
	//remove duplicated char in a string
	var chars = string.split('');
	var len = chars.length;
	if (len<2) {
		return string;
	}
	var p = 0;
	for(var i=0;i<len;++i){
			chars[p++]=chars[i];
			for(var j=i+1;j<len;++j){
				if (chars[j]===chars[i]) {
					chars.splice(j,1);
				}
			}
	}
	string=chars.join('');
	return string;
};
cc.q_1_4 = function (str1 , str2){
	//check if two strings are anagrams
	if (str1==="" || str2==="") {
		return false;
	}
	if (str1.length !== str2.length ) {
		return false;
	}
	String.prototype.sort = function(){
		return this.split('').sort().join('');
	};
	str1=str1.sort();
	str2=str2.sort();
	if (str1===str2) {
		return true;
	}else{
		return false;
	}
};
cc.q_1_5 = function(string){
	//replace whitespace with "%20"
	var chars = string.split('');
	for(var i=0;i<chars.length;++i){
		if (chars[i]===' ') {
			chars[i]="%20";
		}
	}
	return chars.join('');
};
cc.q_1_6 = function(array,n){
	//rotate image
	var transpose = function(arr,n){
		var i,j,tmp;
		for(i=0;i<n;++i){
			for(j=i+1;j<n;++j){
				tmp=arr[i][j];
				arr[i][j]=arr[j][i];
				arr[j][i]=tmp;
			}
		}
		for(i=0;i<n/2;++i){
			for(j=0;j<n;++j){
				tmp=arr[i][j];
				arr[i][j]=arr[n-1-i][j];
				arr[n-1-i][j]=tmp;
			}
		}
		return arr;
	};
	array=transpose(array,n);
	return array;
};
cc.q_1_7 = function (array){
	//for a matrix, set both column and row to 0 if one of the element is 0
	var i,
		j,
		row=[],
		column=[];
	for(i=0;i<array.length;++i){
		for(j=0;j<array[i].length;++j){
			if (array[i][j]===0) {
				row[i]=true;
				column[j]=true;
			}
		}
	}
	for(i=0;i<array.length;++i){
		for(j=0;j<array[i].length;++j){
			if (row[i] || column[j]) {
				array[i][j]=0;
			}
		}
	}
	return array;
};
cc.q_1_8 = function (str,str2){
	//if str2 is rotation of str i.e., “waterbottle” is a rotation of “erbottlewat”
	var s = str+str;
	return (s.indexOf(str2)!==-1);
};
module.exports = cc;