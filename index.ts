import { getStarWarsFilms, getStarWarsPerson } from './client/swapi-client';
import { FilmWithPeopleNames } from './models/films';
import './style.css';

const resolveFilms = async () => {
  const swapiFilms = await getStarWarsFilms();

  const filmsWithPeople = await swapiFilms.map(async resolvedFilm => {
    // TODO resolve films and fill with character names
  });

  return await Promise.all(filmsWithPeople);
};

resolveFilms().then((films: FilmWithPeopleNames[]) => {
  const appDiv: HTMLElement = document.getElementById('app');
  const titles = films.map(film => {
    return `
      <h2>${film.title}</h2>
      <ul>
        ${film.characterNames.map(name => `<li>${name}</li>`).join(' ')}
      </ul>
    `;
  });

  appDiv.innerHTML = titles.join(' ');
});
