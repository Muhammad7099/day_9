//Создай переменную с пустым массивом.
// После этого с помощью метода .push() добавь в него любой элемент.
// Выведи результат в консоль.

// let emptyArray = [];
// emptyArray.push(30);
// console.log(emptyArray);

//**********************************************************************

//Создай новую переменную с пустым массивом.
//Добавь в него три новых текстовых элемента с помощью метода .push()
// (подсказка: несколько элементов можно указать через запятую). Выведи результат в консоль.

// let emptyArray = [];
// emptyArray.push('first', 'second', 'third');
// console.log(emptyArray);

//**********************************************************************

//Создай новую переменную с массивом из двух значений: true и false.
// Добавь в начало этого массива новый элемент со значением null.
// Выведи результат в консоль.

// let bullArr = [true, false];
// bullArr.push(null);
// console.log(bullArr);

//**********************************************************************

//Создай массив из двух вложенных пустых массивов.
// Во второй вложенный массив с помощью .push() добавь три значения true.
// В итоге массив должен стать таким: [[], [true, true, true]]. Выведи результат в консоль.

// let emptyArray = [[],[]];
// emptyArray[1].push(true, true, true);
// console.log(emptyArray[1]);

//**********************************************************************

//Создай переменную со следующим массивом: ["html", "css"].
//В начало этого массива добавь значение "git", а в конец "javascript".
//Выведи результат в консоль.

// let textArr = ['html', 'css'];
// textArr.unshift('git');
// textArr.push('javascript');
//
// **********************************************************************
//
// В конец предыдущего массива добавь строку "figma" не используя метод .push() (вспоминай про способ с []).
// textArr[textArr.length] = 'figma';
// console.log(textArr);

//***********************************************************************

let stack = ["html", "css", "bem", "js"];

// A) добавь в конец массива значение "react" (используй .push())
stack.push('react');

// B) выведи весь массив в консоль
console.log(stack);

// C) добавь в конец массива значение "redux" (используй способ с [])
stack[stack.length] = 'redux';

// D) выведи весь массив в консоль
console.log(stack);

// E) добавь в начало массива значение "git"
stack.unshift('git');

// F) выведи весь массив в консоль
console.log(stack);

/*
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux".
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */

console.log(`сначала мы изучим ${stack[0]} а в конце изучим ${stack[6]}`);


// H) добавь в конец массива сразу два элемента: "mysql" и "mongodb".
stack.push('mysql', 'mongodb');

// I) выведи в консоль длину массива
console.log(stack.length);