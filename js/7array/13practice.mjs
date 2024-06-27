//make a function to check whether the string is palindrome or not 

let ispalindrome = (input)=>{
if(input===input.split("").reverse().join("")){
    return true
}
else{
    return false
}
}
console.log(ispalindrome("mom"))

//("my mom is beautiful but i like madam")
let longestPalindrome = (input) => {
    let temp1 = input.split(" "); //["my","mom","is","beautiful","but","i","like","madam"]
    let temp2 = temp1.filter((word) => {
      return ispalindrome(word);
    }); //["mom","madam"]
    let tempWord = ""; //"madam"
    temp2.forEach((word) => {
      if (word.length > tempWord.length) {
        tempWord = word;
      }
    });
    return tempWord;
  };
  console.log(longestPalindrome("my mom is beautiful but i like madam "));