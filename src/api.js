import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key : "e45e091da589b37da8d897c98a92670d",
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying : () => api.get("movie/now_playing"),
    upcoming : () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular")
}

export const tvApi = {
    nowPlaying : () => api.get("tv/top_rated"),
    upcoming : () => api.get("tv/popular"),
    popular: () => api.get("tv/airing_today")
}