
// let quote = "A thousand miles begins with a single step"

// console.log(quote)

// let Principal = 100000;
// let Rate = 20;
// let Time = 2;
// let Interest = (Principal * Rate * Time) /100;

// console.log(Interest);

// // Hour
// // If hour is between 6am and 12pm: Good morning
// // If its between 12pm and 6pm:Good evening

// let hour = 14;
// if (hour >= 6 && hour < 12)
//   console.log('Good morning');
// else if(hour >= 12 && hour < 18)
//   console.log('Good afternoon');
// else
//   console.log('Good evening');

// let greeting = ' leave me alone '
// console.log(greeting)
// console.log(greeting.trim());

// let tvShow = 'catdog' ;

// tvShow.indexOf('cat');
// console.log(tvShow.indexOf ('cat'))
// tvShow.indexOf('dog');
// console.log(tvShow.indexOf ('dog'))
// tvShow.indexOf('z');
// console.log(tvShow.indexOf ('z'))

// let str = ' \'The downfall of a man is not the \n end of his life \' \\ '
// console.log(str.slice(5,13))

// str = str.replace('downfall','fall')
// console.log(str)

// let firstName = "Shedrach"
// let lastName = "mkpuma"
// console.log(`The full name is ${firstName} ${lastName}`)

// let news = ' The BURNING MAN is a festival in America '
// console.log(`This is for non trim ${(news)}`)
// console.log(`This is for trim ${news.trim()}`)

// console.log(`The index of man is ${news.indexOf ('MAN')}`)

// news = news.replace ('America','Europe')
// console.log(`This is for replace of America to Europe ${news}`)

// console.log(`This is for toUpperCase ${news.toUpperCase(news)}`)

// console.log(`This is for toLowerCase ${news.toLowerCase(news)}`)

// console.log(`This is for slice ${news.slice(22,31)}`)

// let cat1 = Number(prompt('enter cat 1'));
// let cat2 = Number(prompt('enter cat 2'));
// let exam = Number(prompt('enter exam'));
// let totalScore = cat1 + cat2 + exam;
// let grade = 'F'

// console.log(`The value of total score of ${firstName} is ${totalScore}`)

// if(totalScore >= 70){
//   grade = 'A'
//   console.log(`${firstName} passed the exam and the grade is ${grade}`)

// }else if(totalScore >= 60){
//   grade = 'B'
//   console.log(`${firstName} passed the exam and the grade is ${grade}`)

// }else if(totalScore >= 50){
//   grade = 'C'
//   console.log(`${firstName} passed the exam and the grade is ${grade}`)

// }else if(totalScore >= 40){
//   grade = 'D'
//   console.log(`${firstName} passed the exam and the grade is ${grade}`)

// }else{
//   console.log(`${firstName} failed the exam and the grade is ${grade}`)
// }

// let username = prompt('enter username')
// let password = prompt('enter password')

// if(username === 'admin'){

//   if(password === 1234){
//     //   console.log(`Incorrect password`)

// }else{
//     console.log(`login successful`)
    
//   }

// }else{
//   console.log(`Incorrect username`)
// }

// let phone1 = Number(prompt('enter phone1'))
// let phone2 = Number(prompt('enter phone2'))
// let phone3 = Number(prompt('enter phone3'))


// if(phone1 > phone2){

//   if(phone1 > phone3){

//   console.log(`phone1 is the biggest`);
//   }else{

//       console.log(`number3 is the biggest`)
//   }

// }else if(phone2 > phone3){

//   console.log(`phone2 is the biggest`)
// }else{

//   console.log(`phone3 is the biggest`);
// }

// const house = ["Bugalow", "Duplex", "Complex"];
// console.log(house.length);

// const bulbs = ["white", "yellow"];
// console.log(bulbs.length);

// const food1 = ["Rice", "Garri", "Wheat"];
// console.log(food1.length);

// const food2 = new Array("Beans", "Semo");
// console.log(food2.length);

// const food3 = "Yam, Potatoes, Eba, Plantain".split(", ");
// console.log(food3.length);

// console.log(food3.indexOf("Yam"))

// const food1string = food1.join(", ")
// console.log(food1string)

// const newLength = food2.push("Amala");
// console.log(food2);

// const removedItem = food1.pop();
// console.log(food1);
// console.log(removedItem)

// const students = ['Sabinus', 'Joseph', 'Walter'];
// let student = [0]
// console.log(students.indexOf('Joseph'))
// students[0] = 'Jude'
// console.log(students.indexOf(`jude`))

// let size = students.length;
// console.log(students.length)

// let students1 = students.pop();
// console.log(students)
// console.log(students1)

// students.push('Abel')
// console.log(students)
// console.log(students.push('Abel'))

// students.shift();
// console.log(students)

// students.splice(2, 1, 'john', 'jude' )
// console.log(students)

// const names = [ "Ikenna", "John", "Jane"]
// console.log(names)

// console.log(names[2])

// console.log(names[0])

// console.log(names[1])

// console.log(names.push("joseph"))
// console.log(names)

// console.log(names.unshift("James"))
// console.log(names)

// console.log(names.shift())
// console.log(names)

// console.log(names.pop())
// console.log(names)

// const Anthony = [
//     "Anthony",
//     "08044556677",
//     16,
//     ["html", "css", "Js"],
//     [20, 20, 65]
// ]

// console.log(Anthony)
// console.log(Anthony[3])

// console.log(Anthony[3][1])

// console.log(Anthony[4][2])

// let count = 1;

// while(count <= 10){

// //     if(count%2 == 0){

// // console.log(count)
//     // }
//     if(count%2 != 0){
//         console.log(count)
//     }

// count++
// }


// // let  = 0;
// for(count = 0; count < 10; count++) {
//     // console.log(i %2 !== 0)
//     // if(i %2 !== 0)
//     // console.log(i)
//     if(count %2 == 0){
//     console.log(count)
//     }
// }

// let s = 5;
// arr = [9,8,7,6,5,4,3,2,1];

// for(let index = 0; index < arr.length; index++){
//     if(arr[index] == s) {
//         console.log(index);
//         break
//     }
// }

// // let x = 6;
// // arr = [1, 2, 3, 4, 5, 6, 7, 8]

// // for (let index = 0; index < arr.length; index++) {
// //     if (arr[index] == x) {
// //         console.log(index);
// //         break;
// //     }
    
// // }


// for(let i = 5; i <= 15; i++); {
//     console.log(i)
// }

// for(let i = 70; i >= 20; i--); {
//     if(i %2 != 0) {
//         console.log(i)
//     }
// }

// for(let i = 100; i <= 190; i++); {
//     if(i %2 == 0) {
//         console.log(i)
//     }
// }

// const skills = ["css", "html", "js"]

// for(let i = 0; i <= skills.length - 1; i++) {
//     console.log(skills[i])
// }
// const scores = [20, 16, 75, 35, 27, 48, 12, 10]

// for(i = 0; i <= scores.length - 1; i++) {
//     console.log(scores[i] * 10)
// }

// const skill = []

// for( let i = 0; i <= 2; i++) {
//   skill.push(prompt('enter skill'))
// }
// console.log(skill)
// for( let i = 0; i <= skill.length - 1; i++){
//     if(skill[i] == 'React'){
//         console.log(`Advanced Developer`)
//     }
// }

// let max = scores[0];
// for (let i = 0; i <= scores.length; i++) {
//     if (scores[i] > max) {
//         max = scores[i];
//     }
// }
// console.log(max);

// let found = false;
// for( let i = 0; i <= scores.length; i++) {
//     if (scores[i] % 5 === 0 && scores[i] % 3 === 0) {
//         console.log('fizz-buzz')
//         found = true
//     }
//     if (scores[i] % 5 === 0) {
//         console.log('buzz');
//         found = true
//     }
//     if (scores[i] % 3 === 0) {
//             console.log('fizz');
//             found = true;
//         }
    
    
    
// }

// if(found = false){

//     console.log("nothing ")

// }

// let r = 2;
// const pi = 3.142;
// let circumference = 2 * pi * r
// console.log(circumference)

// const pi = 3.142
// let r = 4
// let a = pi * r * r
// console.log(a)

// let cat1 = 9
// let cat2 = 8
// let exam = 30
// let totalscore = cat1 + cat2 + exam;

// if(totalscore >= 50) {
//     console.log(`He passed the exam and the total score is ${totalscore}`)
// }else if (totalscore < 50) {
//     console.log(`He failed the exam and the total score is ${totalscore}`)
// } else {
    
// }


// let number1 = Number(prompt('enter number1'))
// let number2 = Number(prompt('enter number2'))
// let number3 = Number(prompt('enter number3'))

// if (number1 > number2 && number1 > number3) {
//     console.log(`number1 is the  biggest`);
// }else if (number2 > number3 && number2 > number3) {
//     console.log(`number2 is the biggest`);
// } else {
//     console.log(`number3 is the biggest`);
// } {
    
// }

// let English_score = Number(prompt('enter english score'))
// let Math_score = Number(prompt('enter math score'))
// let Civic_score = Number(prompt('enter civic score'))

// if (English_score >= 50 || Math_score >= 50) {
//     console.log("You're Promoted")
// }else{
//     console.log("Repeat class")
// }

// let no1 = Number(prompt(`enter no1`))
// let no2 = Number(prompt(`enter no2`))
// let no3 = Number(prompt(`enter no3`))

// let position1, position2, position3;

//     if (no1 < no2 && no1 < no3) {
    //         position1 = no1;
    //         if (no2 < no3) {
        //             position2 = no2;
        //             position3 = no3;
        //         } else {                  
//             position2 = no3;
//             position3 = no2;
//         }
//     } else if (no2 < no3 && no2 < no1) {
//         position1 = no2;
//         if (no3 < no1) {
//             position2 = no3;
//             position3 = no1;
//         } else {                  
//             position2 = no1;
//             position3 = no3;
//         }
//     } else {                 
//        position1 = no3;        
//         if (no1 < no2) {
//             position2 = no1;
//             position3 = no2;
//         } else {                  
//             position2 = no2;
//             position3 = no1;
//         }
//     }
    
//     console.log(`${position1}, ${position2}, ${position3}`)



// for (let i = 40; i >=  1; i--) {
//     // console.log(i);
//     if (i % 2 != 0) {
//         console.log(i);
//     }
  
// }
// for (let i = 1; i <= 40; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
    
// }
// for (let i = 100; i >= 0; i-= 10) {
//     console.log(i);
  
// }

const scores = [30,20,59,30,11,19,23,55]

// let scores = Number(prompt(`enter no1`))
let x = Number(prompt('enter scores'))
let found = false;
for (let i = 0; i <= scores.length; i++) {

    if( x == scores[i]){

    console.log(`${scores[i]} found`);
    found = true
    }
}
if (found == false) {
    
    console.log(`Nothing was found`);
}

// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }


// let duration = Number(prompt(`Enter total hours car packed`))
// amount = 0
// if (duration <= 5) {
//     amount = duration
// }else{
//     let days = Math.trunc(duration / 24);
//     let remaininghrs = (duration % 24);

//     amount = (days * 15) + (remaininghrs * 0.5)
// }

// console.log(`The total amount to pay is $${amount}`);

//     function greet(name) {
//         console.log('Good Morning ' + name);
//     }
//     greet('Shedrach')

//     const pi = 3.142

//     function area(radius) {
//         let area = pi * radius**2
//         console.log(`The area of the circle with ${radius} is ${area}`);
        
//     }

//     function circumference(radius) {
//         let circumference = 2 * pi * radius
//         console.log(`The circumference of the circle with ${radius} is ${circumference}`);
        
//     }

//     area(10)
//     area(12)

//     circumference(10)
//     circumference(12)

//     let cat1 = Number(prompt(`enter cat1`))
//     let cat2 = Number(prompt(`enter cat2`))
//     let exam = Number(prompt(`enter exam`))
//     // let totalScore = cat1 + cat2 + exam;
    
//     function totalScore(ca1, ca2, exm) {
       
//         let totalScore = ca1 + ca2 + exm
//         return totalScore
//     }
//         let total = totalScore(cat1, )

//     function grade(totalScore) {
//         let grade = "F"

//         if (totalScore >= 70) {
//             grade = "A"
//             console.log(`Passed and the grade is ${grade}`)
//         }else if (totalScore >= 60) {
//             grade = "B"
//             console.log(`Passed and the grade is ${grade}`)
//         } else if (totalScore >= 50){
//             grade = "C"
//             console.log(`Passed and the grade is ${grade}`)
//         }else if (totalScore >= 40) {
//             grade = "D"
//             console.log(`Passed and the grade is ${grade}`)
//         }else {
//             console.log(`Failed and the grade is ${grade}`)
//         }
//     }
//     grade()

//     let P = Number(prompt('Enter Principal'))
//     let R = Number(prompt('Enter Rate'))
//     let T = Number(prompt('Enter Time'))

//     function interest (p, r, t) {
//         let Interest = p * r * t / 100
//         return Interest;
//     }
//     let Interest = interest(P,R,T)
//     console.log(Interest)

//     scores = [20,18,30,70,40,50,65]
//     target = Number(prompt('Enter Target'))
//     function Search(scores, target) {
    
//         for (let i = 0; i < scores.length-1; i++) {
//             if (target == scores[i]) {
//                return `${target} was found`
//             }
            
//         }
//         return 'not found'
        
//     }
//     let  result = Search(scores,target)
//     console.log(result)

//     function Multiply(scores) {
        
//         let newScores = [];
//        for (let i = 0; i < scores.length; i++) {
//         newScores.push(scores[i] * 10);
        
//        }
//        return newScores
//     }
//     console.log(Multiply(scores))
//     console.log(result)

//     // toString
//     //JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
//     scores.toString()
//     console.log(scores)

//     // Slice
//     //The slice() method slices out a piece of an array into a new array.
//     const score = scores.slice(1, 3)
//     console.log(scores);
//     console.log(score)

//     // splice
//     //The splice() method can be used to add new items to an array:
//     //And it can be used to remove item from an array 
//     scores.splice(0, 1, 80,90)
//     console.log(scores)

//     //flattening
//     //Flattening an array is the process of reducing the dimensionality of an array.
//     const newscore = scores.flat()
//     console.log(newscore)

//     //Merging (Concatenating) Arrays
//     //The concat() method creates a new array by merging (concatenating) existing arrays:
//     const boys = ['Joe', 'John', 'Monday']
//     const girls = ['Tasha', 'Stella']

//     const pupils = boys.concat(girls)
//     console.log(pupils)

//     //Sorting Array
//     //The sort() method sorts an array alphabetically:
//     const foods = ['Egg', 'Beans', 'Rice', 'Yam']
//     foods.sort();
//     console.log(foods)

//     //Reversing an Array
//     //The reverse() method reverses the elements in an array.
//     foods.sort;
//     foods.reverse();
//     console.log(foods);


//     //JavaScript Array forEach()
//     //The forEach() method calls a function (a callback function) once for each array element.
//     const numbers = [40, 30, 20, 60, 15]
//     let txt = "solve this puzzle "
//     numbers.forEach(myFunction);
    
//     function myFunction(value) {
//         // txt += value ;
//         console.log(txt + value);
//     }
//     console.log()

//    //Numeric Sorting
//     scores.sort(function(a, b){return a - b});
//     console.log(scores)

//     scores.sort(function(a, b){return b - a});
//     console.log(scores)

// //=> arrow functions
//     const divisibleby10 = () =>{

//     }

// const paragraph = document.querySelector(".para")
// paragraph.innerHTML = "<h3> List of names</h3>"

// const ul = document.createElement("ul")
// const li1 = document.createElement("li")

// li1.innerText = "Shedrach"

// const li2 = document.createElement("li")

// li2.innerText = "Anthony"

// const li3 = document.createElement("li")

// li3.innerText = "Emmanuel"

// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)

// paragraph.appendChild(ul)

const para = document.querySelector(".parag")
const names = ['Anthony', 'Emmanuel', 'Shedrach']
const ul2 = document.createElement('ul')
names.forEach((name) =>{
    const li = document.createElement('li')
    li.innerText = name

    ul2.appendChild(li)
})
para.appendChild(ul2);