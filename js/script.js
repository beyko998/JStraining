"use strict";
// let number = 5;
// const leftBorderWidth =1;
// number = 10;
// console.log(number);
// const obj = {
//     a:50
// };


// obj.a =10;
// console.log(obj);
// {
//     var result = 50;
// }
// console.log(result);


// const a = 5000;
// const b = 3000;
// console.log( "car width : "+ a + "   car length : " + b);
// const obj = {name:'John', age:25, isMarried:false};
// console.log(obj.isMarried);
// console.log(obj['isMarried']);
// let arr = ['zaebalo', 'uzhe', 'vse', 'ya' , 'ne mogu', 'nahooi'];
// console.log();


// const arr = [1, 2, 3];
// console.log(arr[2]);
// const obj = {0:500, "Alice":800};
// obj.sosi = 228;
// console.log(obj);
// console.log(obj['sosi']);
// const answers = [];
// answers[0] = prompt("what is your name?", "");
// answers[1] = prompt("what is your surname?", "");
// answers[2] = prompt("what is your age?", "");

// document.write(typeof(answers));



//  interpolyacia
// const user = prompt("what is your name", "");
// document.write(`${user}, penis is your real name`);

// operators
// let incr = 10,
//     decr = 10;
// // ++incr;
// // --decr;


// console.log("incr: "+ incr++ +" decr: "+ decr--);
// console.log("incr: " +  ++incr +" decr: "+ --decr);
// const obj = {
//     width: "1280px",
//     length: "1024px",
//     array: [],
//     subobj: {
//         petux: 'am',
//         zalupchenki: {
//             kazel: "na voide",
//             uebok: 'na venge'
//         }
//     },
//     makeTest: function(){
//         console.log('tests done');
//     }
// };
// for (let key in obj) {
//     if (typeof (obj[key]) === 'object') {
//         for (let i in obj[key]) {
//             console.log(i);
//             if (typeof (obj[key][i]) === 'object') {
//                 for (let y in obj[key][i]) {
//                     console.log(y);
//                 }
//             }
//         }
//     }
// }
// console.log(Object.keys(obj.subobj));
// obj.makeTest();
// //DESTRUKTURIZACIA
// const{kazel,uebok} = obj.subobj.zalupchenki;
// console.log(kazel);
// function copy(mainObj){
//     let objReturn ={};
//     for(let key in mainObj){
//         objReturn[key]=mainObj[key];
//     }
//     return objReturn;

// }
// const obj ={
//     a:15,
//     b:16,
//     c:{
//         x:22,
//         y:33,
//         z:76
//     }
// };
// // const newObj = copy(obj);
// // newObj.a= 54;
// // console.log(newObj);
// // console.log(obj);
// const add ={
//     x:"podor",
//     y:"huy"
    
// };
// const objecto = Object.assign({},obj);
// objecto.a =28;
// objecto.c.x = 55;
// console.log(obj);
// console.log(objecto);
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan){
//         const {languages} = plan.skills;
//         let result="";
//         for(let key in languages){
//             result+=" "+languages[key].toUpperCase();

//         }
//         return `Мне ${plan.age} и я владею языками:${result.trimEnd()}`;
//     }
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExpirience(plan){
//     const {languages,programmingLangs,exp}=plan.skills;
//     return exp;
// }
// console.log(showExpirience(personalPlanPeter));
// function showProgrammingLangs(plan) {
//     const {languages,programmingLangs,exp}=plan.skills;
//     let result="";
//     for(let key in programmingLangs){
//         result+=`Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return result;
// }
// console.log(showProgrammingLangs(personalPlanPeter));
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// const sosi =[];

// function showFamily(arr) {
//     let result="";
//     if(arr.length ===0) {return "Семья пуста";
//     }else{
//         for(let i=0;i<arr.length;i++){
//             result+=arr[i]+" ";
//         }
//     }
//     return `Семья состоит из:${result.trim()}`;
// }
// console.log(showFamily(sosi));
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i].toLowerCase());
//     }
    
// }
// standardizeStrings(favoriteCities);
// const someString = 'This is some strange string';
// const l ={

// };
// function reverse(str) {
//     let reversed = "";
//     if(typeof(str)==='string'){
//         for(let i=1;i<=str.length;i++){
//             reversed+=str[str.length-i];
//         }
//         return reversed;
//     }else{
//         return "Ошибка!";
//     }
 
// } 
// console.log(reverse(l));
// const baseCurrencies = ['USD', 'EUR','UAH', 'RUB', 'CNY'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let result='';
//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             result += `${curr}\n`;
//         }
//     }); 
//     return result;

// }
// console.log(availableCurr(baseCurrencies,additionalCurrencies));