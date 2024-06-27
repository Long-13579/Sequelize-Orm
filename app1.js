const { where } = require('sequelize');
const models = require('./src/models/index.js');
const { format } = require('path');
const Screen = models.screen;
const Cinema = models.cinema;
const ProvinceCity = models.provincecity;

function changeFilmToFilmDto(films) {
    let listFilmDto;
    let filmDto;
    films.forEach(film => {
        film.shows.forEach(show => {
            filmDto.id = film.id;
            filmDto.poster = film.poster;
            filmDto.ageRating = film.rateId;
            filmDto.format = show.format.name;
            filmDto.title = film.filmName;
            filmDto.trailerLink = film.trailer;
            filmDto.category = "None",
            filmDto.nataion = film.language;
            filmDto.subtitle = film.subtitle ? "None" : "VN";
            filmDto.duration = film.duration;

            listFilmDto.push(filmDto);
        })
    });

    return listFilmDto
}

