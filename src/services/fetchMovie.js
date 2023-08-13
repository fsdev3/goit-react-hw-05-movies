import axios from 'axios';

const API_KEY = '6a0683dee19fbdb413c6749ee38e1926';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

async function fetchMovie(searchResult) {
  const searchParams = {
    query: searchResult,
    // page: pageNumber,
  };

  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  return await response.data;
}
// curl --request GET \
//      --url 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA2ODNkZWUxOWZiZGI0MTNjNjc0OWVlMzhlMTkyNiIsInN1YiI6IjY0ZDhkN2RjZDEwMGI2MDEzOTVkZTBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9VNX7Ejx-gQqZfpxhKRr_X7cvU3d-SXbYHiDn3nidDU' \
//      --header 'accept: application/json'

export { fetchMovie };
