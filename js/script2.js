"use strict";
// // 1задание

         
// console.log(numberOfFilms);
// console.log(typeof(numberOfFilms));
// // 2 задание\

// let numberOfFilms;
// function start(){
//     numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","не знаю") ;
//     while(isNaN(numberOfFilms)||numberOfFilms == ""||numberOfFilms == null){
//         numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","не знаю") ;   
//     }
// } 
// start();

// let personalMovieDB = 
// {
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false
// };

// function personFilmLevel() {
//     if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
//         alert("malo");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert("sredne");
//     } else if (personalMovieDB.count >= 30) {
//         alert("Да ты вообще зверюга,чёрт", "Задрот ебучий");
//     } else {
//         alert('error');
//     }
// }
// personFilmLevel();

// function addToDB(){
//     let a =prompt('Сколько помните?',"2");
//     for(let i =0;i<+a;i++){
//         const b =prompt("Назовите последний просмотренный.", "не помню");
//         const c = +prompt("Оцените от 1 до 10","1");
//         if(b.length<=50 && b != null && b != "" ){
//             personalMovieDB.movies[b] = c;        
//             }else{
//                 alert('go nahui,chmo');
//                 i--;
//             }
//         if(c =='' || c == null || c>=10 ){
//             alert('go nahui,chmo');
//             i--;
//         }
//     }
// }
// addToDB();
// console.log(personalMovieDB);
// function writeYourGenres(){
//     let genres; 
//     for(let i =0;i<3;i++){
//         genres = prompt(`Ваш любимый жанр под номером ${i+1}`,"") ;
//         personalMovieDB.genres[i] = genres;
//     }

// }
// writeYourGenres();
// console.log(personalMovieDB);


// 3 задание
// let oneOfTheLastSeen = prompt("The last one film you have seen?", "");
// let RateThat = +prompt("Rate that film from 1 to 10");
// let oneOfTheLastSeen2 = prompt("The last one film you have seen?", "");
// let RateThat2 = +prompt("Rate that film from 1 to 10");

// personalMovieDB.movies[oneOfTheLastSeen] = RateThat;
// personalMovieDB.movies[oneOfTheLastSeen2] = RateThat2;
// console.log(personalMovieDB.movies);
// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// *
// **
// ***
// ****
// // *****
// let strAstr = '';
// for (let i = 0 ; i < 5; i++){
//     strAstr+='*';
//     console.log(strAstr);
// }

// const lines = 5;
// let spaces;
// let result = '';
// for(let i=0; i<=lines;i++){
//     spaces = lines- i;
//     for(let j =0;j<spaces;j++){
//         result = result + " " ;
//     }
//     for(let k =0;k<i*2+1;k++){
//         result = result + "*" ;
//     }
//     result+= '\n';
// }
// console.log(result);
// function returnNeighboringNumbers(number) {
//     const arr =[];  
//     let a = number - 1;
//     let b = number + 1;
//     arr[0]=+a;
//     arr[1]=+number;
//     arr[2]=+b;
//     return arr;
// }
// console.log(returnNeighboringNumbers("ssss"));
// function getMathResult(number,multiply) {
//     let result= 0;
//     let str="";
//     if(typeof(multiply)=='string'|| multiply<=0){
//         return number;
//     }else{
//         for(let i=0;i<multiply;i++){
//             result += number;
//             if((i+1)==multiply){
//                 str+= result;
//             }else{
//                 str+= result +"---";
//             }
//          }
//     }
//     return str;
// }
// console.log(getMathResult(5,'ssss'));
// const logg ="Hello world!";
// console.log(logg.slice(logg.indexOf("world"),logg.length));
// function calculateVolumeAndArea(number){
//     if (number>0 && Number.isInteger(number) && typeof(number)!= 'string'){
//         let square, volume;
//         square = 6*number*number;
//         volume = number*number*number;
//         console.log(`Объем куба: ${volume}, площадь всей поверхности: ${square}`);
//     }else{
//         console.log('При вычислении произошла ошибка');
//     }
   
// }
// calculateVolumeAndArea(0);
// function getCoupeNumber(number) {
//     if(number==0||number>36){
//         console.log("Таких мест в вагоне не существует");
//     }
//     if(Number.isInteger(number)&&typeof(number)!="string"&&number>0){
//          return Math.ceil(number/4);
//     }else{
//         console.log("Ошибка. Проверьте правильность введенного номера места");
//     }

// }
// getCoupeNumber(-1);




// function getTimeFromMinutes(minutes){
//     let hours, min;
//     if(Number.isInteger(minutes)&&typeof(minutes)!="string"&&minutes>0){
//         hours = Math.floor(minutes/60);
//         min = minutes%60;
//     }else{
//         return "Ошибка, проверьте данные";
//     }
//     switch(hours%10){
//         case 1: return `Это ${hours} час и ${min} минут`;
//         case 2: return `Это ${hours} часа и ${min} минут`;
//         case 3: return `Это ${hours} часа и ${min} минут`;
//         case 4: return `Это ${hours} часа и ${min} минут`;
//         default: return `Это ${hours} часов и ${min} минут`;

//     }
// }

// console.log(getTimeFromMinutes(1232193821932193));
// function findMaxNumber(a,b,c,d) {
//     if(typeof(a)!="number"||isNaN(a)||typeof(a)==="undefined"||typeof(b)!="number"||isNaN(b)||typeof(b)==="undefined"||
//     typeof(c)!="number"||isNaN(c)||typeof(c)==="undefined"||typeof(d)!="number"||isNaN(d)||typeof(d)==="undefined"){
//      return 0;   
//     }
//     let max;
//     if (a>b){
//         max=a;
//     }else{
//         max=b;
//     }
//     if(max<c){
//         max=c;
//     }
//     if(max<d){
//         max=d;
//     }
//     return max;
// }
// console.log(findMaxNumber(28));
// function fib(num) {
//     let arr=[0,1];
//     let str='';
    
//     if(typeof(num)!='number'|| !Number.isInteger(num)){
//         return '';
//     }
//     for(let i=0;i<num;i++){
//         str=str+String(arr[i])+" ";
//         arr[i+2]= arr[i]+arr[i+1];
//     }

//     return str.slice(0,-1);

// }
// console.log(fib(5));
let identificator = 22;
const npc ={
    name:'npc',
    hp:100,
    mp:200,
    skills:['icewalk','fireball'],
    goFuckYourself: function(){
        console.log("hello");
    },
};
let player ={
    name:`player${identificator}`,
    hp:2000,
    mp:4000,
   
};
Object.setPrototypeOf(player,npc);
console.log(player);
console.log(player.skills);
player.goFuckYourself();