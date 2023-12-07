// check for input string
function palindromeTest(str) {
    let s = str.length - 1
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[s]) {
            return false
        }
        s--
    }
    return true
}

function check_palindrome() {
  // get the values from html
  const pali = document.getElementById ('text_area').value
  const isPalindrome = palindromeTest (pali)
  const E = document.getElementById ('result')
  // if condition to check if it's palindrome
  if (isPalindrome) {
    E.innerHTML = 'Correct, It is a  palindrome'
  } else {
    E.innerHTML = 'Sorry, it is not palindrome'
  }
}