import { useEffect, useState } from "react";

const KEY = "b28e9ad6";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); //error message

  useEffect(
    function () {
      //callback?.(); // call the callback function to handle close movie, if it exists
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movies Not Found");
          }

          setMovies(data.Search);

          //make sure to empty the error state if data is loaded
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            //console.error(err.message);
            setError(() => err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      //only search when query string is having more than 3 characters
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      //Close the on-screen movie (MovieDetail), whenever we do new searching
      //We will only fetch movie when searching happens
      //We can also convert fetchMovies() into an EventListener function, when press 'Enter' button on Search bar
      //handleCloseMovie();
      fetchMovies();

      //return clean up function
      return () => {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
