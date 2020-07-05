import Config from "react-native-config";

export function fetchTrendings() {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=d491c13d0f83cf3eb7d60cf61339b370`
    return fetch(url).then((res) => res.json())
}