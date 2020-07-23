const palindromeSentences = [
    "ibu ratna antar ubi",
    "Ini bukan palindrome !!!",
    "kasur ini rusak",
    "A nut for a jar of tuna.",
    "Borrow or rob?",
    "Was it a car or a cat I saw?",
    "Yo, banana boy!",
    "UFO tofu?"
]

const checkPalindrome = (string = '') => {
    const text = string.replace(/\W/g, '').toLowerCase()
    const reverseText = text.split('').reverse().join('')
    return text == reverseText;
}

const palindromeList = palindromeSentences.map(sentence => {
    return checkPalindrome(sentence) === true ? {
        check: "True",
        sentence: sentence
    } : {
        check: "False",
        sentence: sentence
    }
})

console.log(palindromeList)