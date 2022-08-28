"use strict";
// 1задание
let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","не знаю") ;
console.log(numberOfFilms);
console.log(typeof(numberOfFilms));
// 2 задание\
let personalMovieDB = 
{
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
let oneOfTheLastSeen = prompt("The last one film you have seen?", "");
let RateThat = +prompt("Rate that film from 1 to 10");
let oneOfTheLastSeen2 = prompt("The last one film you have seen?", "");
let RateThat2 = +prompt("Rate that film from 1 to 10");
console.log(oneOfTheLastSeen);
console.log(oneOfTheLastSeen2);
console.log(RateThat);
console.log(RateThat2);
personalMovieDB.movies[oneOfTheLastSeen] = RateThat;
personalMovieDB.movies[oneOfTheLastSeen2] = RateThat2;
console.log(personalMovieDB.movies);