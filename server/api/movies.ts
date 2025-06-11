import { defineEventHandler } from "h3";
import { readFileSync } from "fs";
import { join } from "path";
import type { Movie } from "~/types/movie-d-type";

export default defineEventHandler(async () => {
  try {
    // Read the movie.json file
    const filePath = join(process.cwd(), "public", "movie.json");
    const fileContent = readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);

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
      error: "Failed to fetch movies",
    };
  }
});
