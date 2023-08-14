
// const array = [10,20,30,52,45,76,80,95]
// const divisibleby10 = (array) => {
//     array.forEach(item => {
        
//         if (item % 10 == 0) {
//             console.log(item)
//         }
//     });
// }

// divisibleby10(array)

// const cat1 = Number(prompt('Enter cat1'))
// const cat2 = Number(prompt('Enter cat2'))
// const exam= Number(prompt('Enter exam'))

// const calculateTotalScore = (cat1, cat2, exam) =>{
//     // const total = cat1 + cat2 + exam

//     return cat1 + cat2 + exam
// }
// const result = calculateTotalScore(cat1, cat2, exam)

// const calculateGrade = (result) =>{
//     if (result > 50) {
//         console.log('You passed');
//     }else{
//         console.log('You failed');
//     }

// }
// calculateGrade(result)
// console.log(result);

// const Hours = Number(prompt('Enter Hours'))

// function calculateDays(hrs) {
//     let days = Math.trunc (hrs/24)
//     console.log(`The days is ${days}`);
//     }

//     function calculateMinutes(hrs) {
//         let mins = hrs * 60
//         console.log(`The minutes is ${mins}`);

//         return mins
//     }

//     function calculateSeconds(mins) {
//        let sec = mins * 60
//        console.log(`The seconds is ${sec}`);
//     }

//     calculateDays(Hours)
//     let minutes = calculateMinutes(Hours)
//     calculateSeconds(minutes)


//      const numbers = [45, 56,76,20,10, 90]

//     function BiggestNumber(numbers) {
//         let max = numbers[0]
//         for (let i = 1; i < numbers.length; i++) {
            
//             if (numbers[i] >= max) {
//                 max = numbers[i]
              
//             }
//         }
//         console.log(max); 
        
//     }
//     BiggestNumber(numbers)

//     function SmallestNumber(numbers) {
//         let min = numbers[0]
//         for (let i = 0; i < numbers.length; i++) {
            
//             if (numbers[i] <= min) {
//                 min = numbers[i]
              
//             }
//         }
//         console.log(min); 
        
//     }
//     SmallestNumber(numbers)

//     const numbersArray = [45, 56,76,20,10, 90]

//     const multiplyBy10 = (numbers) => {

//         const newNumber = []
//         numbers.forEach(element => {

//             newNumber.push(element * 10) ;
//         })
//         return newNumber
//     }

    // console.log(multiplyBy10(numbersArray))
    
    const students = [ {
        Name: 'Athony',
        Age: 16,
        Gender: 'Male',
        scores: {cat1:30, cat2:40, cat3:50, cat4:25, cat5:72}
}, {
        Name: 'Hanna',
        Age: 17,
        Gender: 'Female',
        scores: {cat1:50, cat2:91, cat3:67, cat4:22, cat5:74}
}, {
        Name: 'Julieth',
        Age: 19,
        Gender: 'Female',
        scores: {cat1:35, cat2:48, cat3:20, cat4:99, cat5:67}
}, {
        Name: 'Emmanuel',
        Age: 15,
        Gender: 'Male',
        scores: {cat1:40, cat2:60, cat3:90, cat4:29, cat5:52}
}, {
        Name: 'Ifechi',
        Age: 18,
        Gender: 'Male',
        scores: {cat1:30, cat2:20, cat3:60, cat4:35, cat5:79}
}
]
// students.forEach((students) =>{

//     for (let i = 0; i < students.scores.length; i++) {
//         students.scores[i] = students.scores[i] + 10
//     }
//     console.log(students.scores);
//     // console.log(students.Name)
// })


// const addScores = (students) => {

//     let total;

//     students.forEach((students) => {

//         total = students.scores.cat1 +  students.scores.cat2 +  students.scores.cat3 +  students.scores.cat4 +  students.scores.cat5

        
//         console.log(`${students.Name} scored ${total}`);
//     })
    
// }
// addScores(students);

// const nom = [9, 8, 7, 6, 5, 4, 3, 2, 1]

// nom.forEach((el) => {
//     if (el % 2 !== 0) {
//         console.log(el);
//     }
// });

// const getAge = () => {
//     students.forEach((s) => {
//         console.log(`The age of ${s.Name} is ${s.Age}`);
//     });
// }
// getAge();

// const getScores = () => {
//     students.forEach((N) => {
//         console.log(`The scores of ${N.Name} are ${N.scores.cat1}, ${N.scores.cat2}, ${N.scores.cat3}, ${N.scores.cat4}, ${N.scores.cat5}`);
//     })
// }
// getScores();

// const getNameAgeGender = () => {
//     const NameAgeGender = students.map((M) => {
//         return `${M.Name}, ${M.Age}, ${M.Gender}`
//     })
//     console.log(NameAgeGender);
// }
// getNameAgeGender()

// const getAllScores = () => {
//     const AllScores = students.map((T) => {
//         return `${T.Name} scores are ${T.scores.cat1}, ${T.scores.cat2}, ${T.scores.cat3}, ${T.scores.cat4}, ${T.scores.cat5}`
//     })
//     console.log(AllScores);
// }
// getAllScores()

// let nameToFind = prompt('Enter Name')

// const findNAme = (name) => {
//    const result = students.find((std) =>{

//     return std.Name.includes(name);
//    })
//    if(result){

//     console.log(`The name found is ${result.Name}`);
//    }else{
//     console.log('name not found')
//    }
   

// }
// findNAme(nameToFind)

// const nombers = [12,30,54,19,69,21,31]

// const filtered = nombers.filter(function (checkAdult) {
//     return checkAdult >= 18
// })
// console.log(filtered);

// //for every: Array evry returns true or false 
// const isOver10 = (n) => {
//     return n < 10
// }
// console.log(nombers.every(isOver10));

// //For Reduce
// const sum = nombers.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue
// });
// console.log(sum);

// let som = 0;
// for (let n of nombers)
//     som += n

//     console.log(som);
const table = document.querySelector(".mytable")


students.forEach((student) => {
    const tr = document.createElement("tr")

    const td1 = document.createElement('td')
    td1.innerText = student.Name

    const td2 = document.createElement('td')
    td2.innerText = student.Age

    const td3 = document.createElement('td')
    td3.innerText = student.Gender

    const td4 = document.createElement('td')
    td4.innerText = student.scores.cat1 + student.scores.cat2 + student.scores.cat3

    tr.append(td1, td2, td3, td4)
    table.appendChild(tr)
});

const quizs = [{
     Question: ' What is 10 * 10 ?',
     Option:{A:10, B: 200, C: 100,} ,
     Answer: {C:100}
},
{
    Question: ' What is 9 * 9 ?',
    Option:{A:102, B: 23, C: 81,}  ,
    Answer: {C:81}
},
{
   Question: ' What is 8 * 8 ?',
   Option:{A:64, B: 70, C: 99,} ,
   Answer: {A:64}
},
{
   Question: ' What is 7 * 7 ?',
   Option:{A:11, B: 49, C: 99,} ,
   Answer: {B:49}
},
{
   Question: ' What is 6 * 6 ?',
   Option:{A:34, B: 36, C: 88,} ,
   Answer: {B:36}
},
{
   Question: ' What is 10 * 5 ?',
   Option:{A:56, B: 50, C: 28,} ,
   Answer: {B:50}
},
{
   Question: ' What is 10 * 9 ?',
   Option:{A:88, B: 90, C: 99,} ,
   Answer: {B:90}
},
{
   Question: ' What is 2 * 1 ?',
   Option:{A:2, B: 4, C: 5,} ,
   Answer: {A:2}
},
{
   Question: ' What is 45 + 45 ?',
   Option:{A:90, B: 490, C: 99,} ,
   Answer: {A:90}
},
{
   Question: ' What is 20 * 10 ?',
   Option:{A:100, B: 200, C: 99,} ,
   Answer: {B:200}
}
]

const quizpara = document.querySelector('.quiz')
const quizul = document.createElement('div')
const quizol = document.createElement('ol')
const quizh3 = document.createElement('h3')
quizh3.innerText = "Answer the following quiz questions"
quizul.appendChild(quizh3)
quizul.appendChild(quizol)
// quizul.appendChild(radio)


quizs.forEach((quiz, index) => {
   const quizli = document.createElement('li')
   quizli.innerText = quiz.Question
   quizol.appendChild(quizli)
   const QtnOptions = document.createElement('div')
   const opts = quiz.Option;
   const listOpts = document.createElement('ol')
   const transformedArray = Object.keys(opts).map(key => opts[key]);
   var inputName = index;
   transformedArray.map((tarr, index) => {
      const radiobtn = document.createElement('input')
      radiobtn.setAttribute('type', 'radio')
      radiobtn.name = inputName
      const listItem = document.createElement('li')
      listItem.appendChild(radiobtn)
      const label = document.createElement('label');
      label.textContent = tarr
      listItem.appendChild(label)
      listOpts.appendChild(listItem)
   })
   // console.log(opts);
   QtnOptions.appendChild(listOpts)
   quizol.appendChild(QtnOptions)
   // opts.forEach((opt) => {
   //    var optlist = document.createElement('li')
   //    optlist.innerHTML = opt.A
   // })
   // QtnOptions.appendChild(optlist)
   // quizul.appendChild(QtnOptions)
   
   // const radioA = document.createElement('input')
   // radioA.setAttribute('type', 'radio')
   // radioA.setAttribute('name', "qst1")
   //      const optionAli = document.createElement('li')
   //    //   var fist = radioA.append(quiz.Option.A)
   //      optionAli.innerText = quiz.Option.A;
   //    //   optionAli.appendChild(radioA)
   //      radioA.append(optionAli)
   //      quizol.appendChild(optionAli)
        
   //      const radioB = document.createElement('input')
   //      radioB.setAttribute('type', 'radio')
   //      const optionBli = document.createElement('li')
   //      optionBli.innerText = quiz.Option.B;
   //      quizol.appendChild(optionBli)
   //      optionBli.appendChild(radioB)

   //      const radioC = document.createElement('input')
   //      radioC.setAttribute('type', 'radio')
   //      const optionCli = document.createElement('li')
   //      optionCli.innerText = quiz.Option.C;
   //      quizol.appendChild(optionCli)
   //      optionCli.appendChild(radioC)

      
        quizul.appendChild(quizol)
})

quizpara.appendChild(quizul)