"use strict";

const numerOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

console.log(numerOfFilms);

const personalMovieDB = {
    count: numerOfFilms,
    movies: {
         
    },
    actors: {

    },
    genres: [

    ],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('Насколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('Насколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
