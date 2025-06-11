import { readFileSync } from "fs";
import { join } from "path";
import type { Movie } from "~/types/movie-d-type";

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export default defineEventHandler((event) => {
  try {
    // Get movie ID from params
    const id = getRouterParam(event, "id");

    // Read movie.json file
    const filePath = join(process.cwd(), "public", "movie.json");
    const fileContent = readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent) as MovieResponse;

    // Find movie by ID
    const movie = data.results.find((m: Movie) => m.id === Number(id));

    if (!movie) {
      throw createError({
        statusCode: 404,
        message: "Movie not found",
      });
    }

    return movie;
  } catch (error: unknown) {
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
});
