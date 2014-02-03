var assert = require("assert");
var cc = require("../lib/chapter1.js");
var util=require("../util.js");


describe('question 1.1',function(){
	it('should return true if char duplicate in a string',function(){
		assert.equal(true,cc.q_1_1("abeirnlgpsj458297"));
		assert.equal(false,cc.q_1_1("abeirnlgplsj4348297"));
	});
});

describe('question 1.2',function(){
	it('should return a reversed string',function(){
		assert.equal(true,(cc.q_1_2("abcde"))==="edcba");
	});
});

describe('question 1.3',function(){
	it('should a string without duplicate',function(){
		assert.equal(true,(cc.q_1_3("abcdeacdea"))==="abcde");
	});
});

describe('question 1.4',function(){
	it('should return true if two strings are anagrams',function(){
		assert.equal(true,(cc.q_1_4("abcad","dcaab")));
	});
});

describe('question 1.5',function(){
	it('should return true if two strings are anagrams',function(){
		assert.equal(true,(cc.q_1_5("I am a student")==="I%20am%20a%20student"));
	});
});

describe('question 1.6',function(){
	it('should rotate a matrix by 90 angle',function(){
		var matrix= [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
		var matrixRotate = [[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]];
		
		var result=cc.q_1_6(matrix,matrix.length);
		assert.equal(true,util.isMatrixEqual(result,matrixRotate));
	});
});

describe('question 1.7',function(){
	it('should set column and row to 0',function(){
		var matrix= [[1,2,0,4],[5,6,7,8],[9,10,11,12],[0,14,15,16]];
		var matrixAfter=[[0,0,0,0],[0,6,0,8],[0,10,0,12],[0,0,0,0]];

		var result=cc.q_1_7(matrix);
		assert.equal(true,util.isMatrixEqual(result,matrixAfter));
	});
});

describe('question 1.8',function(){
	it('should return true if a string is rotation of another',function(){
		assert.equal(true,(cc.q_1_8("abcde","cdeab")));
		assert.equal(false,(cc.q_1_8("abcde","cdeba")));
	});
});