'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        let check;
        for (let i = 1; i <= 3; i++) {
            check = prompt(`Ваш любимый жанр под номером ${i}`);
            if (check != null && check!= ''){
                this.genres[i - 1] = check;
            }else{
                console.log('вы ввели хуйню');
                i--;
            }
        }

        this.genres.forEach((item, i)=>{console.log(`Любимый жанр #${i+1} - это ${item}`);});
                
    },
    toggleVisibleMyDB: function() {
        if(this.privat){
            this.privat = false;
        }else{
            this.privat = true;
        }
    },
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
