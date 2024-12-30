import { useState,useEffect} from "react";
import { options } from "../utils/option"

const useFetch = (apiPath) => {
const [data , setData] = useState([]);
useEffect(() => {
async function fetchMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`, options);
    const data = await response.json();
    console.log(data.results);
}
fetchMovies();

}, [apiPath]);

return {data};
}

export default useFetch;