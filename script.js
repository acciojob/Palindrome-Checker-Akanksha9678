// complete the given function

function palindrome(str){
	let str1="";
	str.toLowerCase();
	for(let t of str){
		str1=t+str1;
	}
	if(str1==str){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
