// complete the given function

function palindrome(str){
    // Convert the string to lowercase
    str = str.toLowerCase();
    // Reverse the string
    let reversed = str.split('').reverse().join('');
    // Compare the original string with the reversed string
    return str === reversed;

}
module.exports = palindrome
