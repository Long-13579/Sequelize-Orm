const { where } = require('sequelize');
const models = require('./src/models/index.js');
const { format } = require('path');
const Screen = models.screen;
const Cinema = models.cinema;
const ProvinceCity = models.provincecity;

function changeFilmToFilmDto(films) {
    let listFilmDto = [];
    films.forEach(film => {
        film.shows.forEach(show => {
            let filmDto = {};
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

let Obj = [
  {
    id: 6,
    filmName: 'Dragon Balls',
    duration: 300,
    description: 'its description',
    dateStart: '2024-12-30',
    dateEnd: null,
    director: 'Japanese Guy',
    actor: 'Japanese Guy',
    subtitle: 48,
    language: 'Japanese',
    rateId: 1,
    poster: 'poster url',
    trailer: 'trailer url',
    shows: [
      {
        formatId: 1,
        format: {
          name: '3D',
        },
      },
      {
        formatId: 2,
        format: {
          name: '2D',
        },
      },
    ],
  },
  {
    id: 7,
    filmName: '007',
    duration: 280,
    description: 'its description',
    dateStart: '2024-12-15',
    dateEnd: null,
    director: 'American Guy',
    actor: 'American Guy',
    subtitle: 49,
    language: 'American',
    rateId: 3,
    poster: 'poster url',
    trailer: 'trailer url',
    shows: [
      {
        formatId: 1,
        format: {
          name: '3D',
        },
      },
    ],
  },
  {
    id: 8,
    filmName: 'Three Kingdooms',
    duration: 270,
    description: 'its description',
    dateStart: '2024-11-30',
    dateEnd: null,
    director: 'Chinese Guy',
    actor: 'Chinese Guy',
    subtitle: 49,
    language: 'Chinese',
    rateId: 5,
    poster: 'poster url',
    trailer: 'trailer url',
    shows: [
      {
        formatId: 1,
        format: {
          name: '3D',
        },
      },
    ],
  },
  {
    id: 9,
    filmName: 'Home Alone',
    duration: 280,
    description: 'its description',
    dateStart: '2024-11-23',
    dateEnd: null,
    director: 'American Guy',
    actor: 'American Guy',
    subtitle: 49,
    language: 'American',
    rateId: 4,
    poster: 'poster url',
    trailer: 'trailer url',
    shows: [],
  },
  {
    id: 10,
    filmName: 'Bo Gia',
    duration: 240,
    description: 'its description',
    dateStart: '2024-12-21',
    dateEnd: null,
    director: 'Vietnamese Guy',
    actor: 'Vietnamese Guy',
    subtitle: 48,
    language: 'Vietnamese',
    rateId: 4,
    poster: 'poster url',
    trailer: 'trailer url',
    shows: [],
  },
];

let result = changeFilmToFilmDto(Obj);
console.log(result)