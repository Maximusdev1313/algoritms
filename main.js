// * 148
// const strings = 'ARTDJ Algoritm tuit uz dizayneri';

// function algo(item) {

//     const words = item.split(' ');

//     const wordsStartingWithA = words.filter(word => word[0].toLowerCase() === 'a');

//     wordsStartingWithA.forEach(word => console.log(word));
// }

// algo(strings);

// * 149

// const strings = 'ANA MANA YANA asd HDFNAS';

// function algo(item) {
//     const words = item.split(' ');
//     let wordCount = 0
//     let foundWords = []
//     words.forEach(word => {
//         if (word.toLowerCase().endsWith('na')) {
//             wordCount++
//             foundWords.push(word)
//         };;
//     });
//     console.log('soni: ' + wordCount + " so'z: " + foundWords);

// }

// algo(strings);


// * 150

// const strings = 'Informatik Informatsiyalar jarayoni';

// function algo(item) {
//     const words = item.split(' ');
//     let wordCount = 0
//     let foundWords = []
//     words.forEach(word => {
//         if (word.toLowerCase().startsWith('info')) {
//             wordCount++
//             foundWords.push(word)
//         };;
//     });
//     console.log('soni: ' + wordCount + " so'z: " + foundWords);

// }

// algo(strings);

// * 151

// const strings = 'SOMEONE SOMEWHERE';
// const unli = /[AaOoIiUuEe]/g
// let found = strings.match(unli)
// console.log(found.length);


// * 152

// let strings = 'Somehow Somebody'

// strings = strings.split('').reverse().join('')
// console.log(strings)

// * 153

// let strings = 'ALGORITM TUIT UZ'

// strings = strings.split(' ').forEach(string => console.log(string, string.length))

// * 154

// let numbers = 10000012
// let sum = 0
// numbers.toString().split('').forEach(element => {
//     sum += element * 1
// });
// console.log(sum);

// * 155
// const strings = 'TATU Urganch filiali Talabalari'
// let counter = 0
// function upper() {
//     const words = strings.split(' ');
//     console.log(words);

//     words.forEach(word => {
//         if (word[0] == word[0].toUpperCase()) {
//             counter++
//         }
//     })

//     console.log(counter);
// }
// upper()

// * 156

// let strings = 'Asus Acer HP Lenovo Dell';
// let place = [1, 2];

// function replace() {
//     let words = strings.split(' ');

//     [words[place[0] - 1], words[place[1] - 1]] = [words[place[1] - 1], words[place[0] - 1]];

//     const modifiedString = words.join(' ');

//     console.log(modifiedString);
// }

// replace();

// * 157


// let strings = 'Tatu urganch filiali talabasi';
// let place = 1;

// function replace() {
//     let words = strings.split(' ');

//     words[place - 1] = 'TATU'

//     const modifiedString = words.join(' ');

//     console.log(modifiedString);
// }

// replace();


// * 158

// savolni tushunmadim

// * 159

// const strings = 'abracadabra suf kuf'

// let counter = 0

// function calculate() {
//     const words = strings.split(' ')
//     words.forEach((word) => {
//         console.log(word);
//         if (word.startsWith('a') && word.endsWith('b')) {
//             counter++
//         }
//     })

//     console.log(counter);
// }
// calculate();


// *160

// const inputText = "alGo uz";


// let resultText = "";


// for (const char of inputText) {
//     if (char.match(/[a-z]/)) {

//         resultText += char.toUpperCase();
//     } else if (char.match(/[A-Z]/)) {

//         resultText += char.toLowerCase();
//     } else {

//         resultText += char;
//     }
// }

// console.log(`Natija: ${resultText}`);

// *161
// function canFormWord(cards, word) {
//     const cardCount = {};
//     for (const card of cards) {
//         for (const letter of card) {
//             cardCount[letter] = cardCount[letter] ? cardCount[letter] + 1 : 1;
//         }
//     }

//     for (const letter of word) {
//         if (letter === ' ') {
//             continue;
//         }
//         if (!cardCount[letter] || cardCount[letter] === 0) {
//             return 'NO';
//         }
//         cardCount[letter] -= 1;
//     }

//     return 'YES';
// }

// const cards = ['A', 'S', 'S', 'A', 'L', 'O', 'M'];
// const word1 = 'A L B S O M D A T A S J A ';
// const word2 = 'HELLO';

// console.log(canFormWord(cards, word1));
// console.log(canFormWord(cards, word2)); // notogri


// *162
// const letter = 'Bu$ d$asturn$ing bi$rinchi$ test$i ';
// const modifiedLetter = letter.split('$').join('');
// console.log(modifiedLetter);

