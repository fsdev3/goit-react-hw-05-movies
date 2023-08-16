import axios from 'axios';

export async function fetchMovies(url, queryString) {
  try {
    const response = await axios.get(`${url}`, {
      params: {
        language: 'en-US',
        api_key: '6a0683dee19fbdb413c6749ee38e1926',
        include_adult: 'false',
        page: '1',
        query: queryString,
      },
    });
    if (Array.isArray(response.data.results)) {
      return response.data.results;
    } else {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
