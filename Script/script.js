
let quote = "A thousand miles begins with a single step"

console.log(quote)

let Principal = 100000;
let Rate = 20;
let Time = 2;
let Interest = (Principal * Rate * Time) /100;

console.log(Interest);

// Hour
// If hour is between 6am and 12pm: Good morning
// If its between 12pm and 6pm:Good evening

let hour = 14;
if (hour >= 6 && hour < 12)
  console.log('Good morning');
else if(hour >= 12 && hour < 18)
  console.log('Good afternoon');
else
  console.log('Good evening');

let greeting = ' leave me alone '
console.log(greeting)
console.log(greeting.trim());

let tvShow = 'catdog' ;

tvShow.indexOf('cat');
console.log(tvShow.indexOf ('cat'))
tvShow.indexOf('dog');
console.log(tvShow.indexOf ('dog'))
tvShow.indexOf('z');
console.log(tvShow.indexOf ('z'))

let str = ' \'The downfall of a man is not the \n end of his life \' \\ '
console.log(str.slice(5,13))

str = str.replace('downfall','fall')
console.log(str)

let firstName = "Shedrach"
let lastName = "mkpuma"
console.log(`The full name is ${firstName} ${lastName}`)

let news = ' The BURNING MAN is a festival in America '
console.log(`This is for non trim ${(news)}`)
console.log(`This is for trim ${news.trim()}`)

console.log(`The index of man is ${news.indexOf ('MAN')}`)

news = news.replace ('America','Europe')
console.log(`This is for replace of America to Europe ${news}`)

console.log(`This is for toUpperCase ${news.toUpperCase(news)}`)

console.log(`This is for toLowerCase ${news.toLowerCase(news)}`)

console.log(`This is for slice ${news.slice(22,31)}`)

let cat1 = Number(prompt('enter cat 1'));
let cat2 = Number(prompt('enter cat 2'));
let exam = Number(prompt('enter exam'));
let totalScore = cat1 + cat2 + exam;
let grade = 'F'

console.log(`The value of total score of ${firstName} is ${totalScore}`)

if(totalScore >= 70){
grade = 'A'
  console.log(`${firstName} passed the exam and the grade is ${grade}`)
}
else if(totalScore >= 60){
  grade = 'B'
console.log(`${firstName} passed the exam and the grade is ${grade}`)
}
else if(totalScore >= 50){
  grade = 'C'
  console.log(`${firstName} passed the exam and the grade is ${grade}`)
}
else if(totalScore >= 40){
  grade = 'D'
  console.log(`${firstName} passed the exam and the grade is ${grade}`)
}
else{
  console.log(`${firstName} failed the exam and the grade is ${grade}`)
}