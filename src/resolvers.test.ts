import resolvers from "./resolvers";

const context = {
  dataSources: {
    tmdb: {
      getMovieById: () => ({
        id: "603",
        title: "The Matrix",
        releaseDate: "1999-03-30",
        overview:
          "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      }),
    },
  },
};

test("movie", () => {
  const result = resolvers.Query.movie(null, { id: 603 }, context);
  expect(result).toMatchSnapshot();
});
