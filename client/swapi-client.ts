import axios from 'axios';
import { Film } from '../models/films';
import { Person } from '../models/person';

// https://axios-http.com/docs/intro

// https://swapi.dev/

// https://swapi.dev/documentation#films
// https://swapi.dev/documentation#people

export const getStarWarsFilms = async (): Promise<Film[]> => {
  // TODO: get star wars films
};

export const getStarWarsPerson = async (url: string): Promise<Person> => {
  // TODO: get star wars person via url
};
