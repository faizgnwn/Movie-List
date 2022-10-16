import movie from './movies.js';

class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bee359088ec56031386d27f4a16a8205&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
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