class Str {
    constructor(str) {
        this.str = str
    }
    // 1
    lower(word) {
        return word.toLowerCase()
    }
    // 2
    upper(word) {
        return word.toUpperCase()
    }
    // 3
    capitalize(word) {
        word = word.split(' ').map((value) => value.toLowerCase().replace(value.charAt(0), value.charAt(0).toUpperCase())).join(' ')
        return word
    }
    // 4
    reverse(word) {
        return word.split('').reverse().join('');
    }
    // 5 belum
    // 6
    random(number = 16) {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('') // biar jadi array
        let print = "";
        while (print.length < number) {
            print += chars[Math.floor(Math.random() * chars.length)]
        }
        return print
    }
    // 7
    slug(word, seperator = "-") {
        word = word.replace(/\W/g, seperator).replace(new RegExp(`${seperator}+`, "g"), seperator)
        return word;
    }
    // 8
    count(word) {
        return word.length;
    }
    // 9
    countWords(word) {
        return word.split(' ').length
    }
    // 10
    trim(word, count = 100, seperator = "...") {
        if (word.length > count)
            word = word.slice(0, -word.length + count) + seperator;
        return word;
    }
    // 11
    trimWords(word, count = 30, seperator = "...") {
        if (word.split(' ').length > count)
            word = word.split(' ').slice(0, -word.split(' ').length + count) + seperator;
        return word;
    }
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
let str = new Str()

/*1*/
console.log(str.lower('MAKAN'))
/*2*/
console.log(str.upper('malam'))
/*3*/
console.log(str.capitalize("saya ingin makan"))
/*4*/
console.log(str.reverse("kasur"))
/*5*/
//belum selesai
/*6*/
console.log(str.random())
/*7*/
console.log(str.slug('JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?', "_"))
/*8*/
console.log(str.count("tes a"))
/*9*/
console.log(str.countWords("tes asadsd"))
/*10*/
console.log(str.trim(text, 20, '.....'));
/*11*/
console.log(str.trimWords(text, 3, '.....'));