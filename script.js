// complete the given function

function palindrome(str){
	let str1=str;
	str1.reverse();
	if(str1==str){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
