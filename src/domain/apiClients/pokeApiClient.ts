import axios from "axios";

const localBaseURL = "https://pokeapi.co/api/v2/";

const pokeApiClient = axios.create({
  baseURL: localBaseURL,
});

export default pokeApiClient;
