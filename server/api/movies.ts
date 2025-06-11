import { defineEventHandler } from "h3";
import type { Movie } from "~/types/movie-d-type";

export default defineEventHandler(async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1&api_key=c3c683516a9277e38dd654ff1a858d0d"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Sort movies by popularity and get top 5
    const popularMovies = data.results
      .sort((a: Movie, b: Movie) => b.popularity - a.popularity)
      .slice(0, 5);

    return {
      success: true,
      data: popularMovies,
    };
  } catch (err) {
    console.error("Error fetching movies:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to fetch movies",
    };
  }
});
