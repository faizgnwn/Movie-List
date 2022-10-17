import movie from './movies.js';

class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=bee359088ec56031386d27f4a16a8205&language=en-US&query=%24%7Bkeyword%7D&page=1&include_adult=false`)

      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}
export default DataSource;
