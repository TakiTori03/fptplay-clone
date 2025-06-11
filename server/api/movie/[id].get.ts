export default defineEventHandler(async (event) => {
  try {
    // Get movie ID from params
    const id = getRouterParam(event, "id");

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c3c683516a9277e38dd654ff1a858d0d`
    );

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: "Failed to fetch movie details",
      });
    }

    const movie = await response.json();

    return movie;
  } catch (error: unknown) {
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
});
