import Config from "react-native-config";

export function fetchTrendings() {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=d491c13d0f83cf3eb7d60cf61339b370`
    return fetch(url).then((res) => res.json())
}

export function fetchGenres(){
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=d491c13d0f83cf3eb7d60cf61339b370&language=en-US`
    return fetch(url).then((res) => res.json())
}

export function fetchMoviesByGenre(genreId){
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=d491c13d0f83cf3eb7d60cf61339b370&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
    return fetch(url).then((res) => res.json())
}